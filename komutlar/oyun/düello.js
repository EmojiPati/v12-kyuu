const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../../util/Util.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

    
      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**<:blurpleno:857917856041271336> Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  this.fighting = new Set();
  
	let opponent = message.mentions.users.first()
	if (!opponent) return message.reply("<:blurpleigne:857930551314874408> Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (opponent.bot) return message.reply('<:blurpleno:857917856041271336> Botlar ile oynayamazsın!');
  if (opponent.id === message.author.id) return message.reply('<:blurpleno:857917856041271336> Kendin ile düello Atamazsın');
		if (this.fighting.has(message.channel.id)) return message.reply('<:blurpleno:857917856041271336> Kanal başına sadece bir düello meydana gelebilir.');
		this.fighting.add(message.channel.id);
		try {
			if (!opponent.bot) {
                await message.channel.send(`<:blurpleintegrasyon:857907154211045387> ${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun? (\`evet\` veya \`hayir\` olarak cevap veriniz.)`);
				const verification = await verify(message.channel, opponent);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send(`<:blurpleno:857917856041271336> Düello kabul edilmedi...`);
				}
			}
			let userHP = 500;
			let oppoHP = 500;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
			};
			while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : opponent;
				let choice;
				if (!opponent.bot || (opponent.bot && userTurn)) {
					await message.channel.send(stripIndents`
						${user}, ne yapmak istersin? \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`?
						**${message.author.username}**: ${userHP} :heartpulse:
						**${opponent.username}**: ${oppoHP} :heartpulse:
					`);
					const filter = res =>
						res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply(`<:blurpleno:857917856041271336> Üzgünüm ama, süre doldu!`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'savun', 'ultra güç'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
					const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
					await message.channel.send(`${user}, **<:redsword:851903478162259968> ${damage}** hasar vurdu!`);
					dealDamage(damage);
					reset();
				} else if (choice === 'savun') {
					await message.channel.send(`<:redguard:849738272200458271> ${user}, kendisini süper kalkan ile savundu!`);
					guard = true;
					reset(false);
				} else if (choice === 'ultra güç') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 150 : 300);
						await message.channel.send(`<:mariohammer:851904511228510271> ${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterki miktarda topladın ve **${damage}** hasar vurdun!!`);
						dealDamage(damage);
					} else {
						await message.channel.send(`<:blurpleno:857917856041271336> ${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterli miktarda toplayamadığın için ulta güç kullanamadın!`);
					}
					reset();
				} else if (choice === 'kaç') {
					await message.channel.send(`<a:escape:851903581635346503> ${user}, kaçtı! Korkak!`);
					forfeit();
					break;
				} else {
					await message.reply('<:redsearch:849726094570946641> Ne yapmak istediğini anlamadım.');
				}
			}
			this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
			return message.channel.send(`<:redvictory:851905280802816051> Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
 
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duel'],
  permLevel: 0
};
exports.help = {
  name: 'düello',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'duello <@kullanıcı>'
};