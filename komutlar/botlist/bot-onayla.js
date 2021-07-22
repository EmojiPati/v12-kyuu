const Discord = require('discord.js');
const db = require('quick.db');
const { attention, igne, no2, yes, user, mention, yes2 } = require('../../emoji.json')


module.exports.run = async (client, message, args, member) => {
  let kanal = await db.fetch(`bykanal.${message.guild.id}`);
  let kanal2 = await db.fetch(`bgkanal.${message.guild.id}`);
  let kanal3 = await db.fetch(`botlistlog.${message.guild.id}`);
  let westrabasvuruyapılacakkanal = await db.fetch(`bykanal.${message.guild.id}`, kanal.id);
  let westrabasvurugidecekkanal = await db.fetch(`bgkanal.${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`botlistlog.${message.guild.id}`, kanal3.id);
 let westrabotlistyetkilisi = db.fetch(`yetkilirol.${message.guild.id}`);
 let developer = db.fetch(`developerrol.${message.guild.id}`);
 let botrol = db.fetch(`botrol.${message.guild.id}`)
   if(!message.member.roles.cache.has(westrabotlistyetkilisi)) return message.channel.send(`${attention} Bu komutu kullanabilmen için <@&${westrabotlistyetkilisi}> adlı role sahip olman lazım!`)
	let botisim = message.guild.members.cache.get(args[0]);
    let sahip = message.guild.members.cache.get(args[1]);
	let log = westralogkanal //  Bot Eklendi / Onaylandı / Rededildi Kanalı 
	if (!botisim) return message.channel.send(`${igne} Botun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  	if (!sahip) return message.channel.send(`${igne} Bot sahibinin ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
   const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`0x36393E`)
    .setFooter(`DragonBot Botlist Sistemi`)
    .setTimestamp()
    .setDescription(`${yes} <@${sahip}> adlı kişinin <@${botisim}> adlı botu onaylandı. Onaylayan yetkili: ${message.author}`)
		client.channels.cache.get(log).send(westrabumbeyyyy);
		message.channel.send(`${yes2} Botu onayladınız.`).then(x => x.delete({timeout: 3000}))
        sahip.roles.add(developer);
        botisim.roles.add(botrol)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botonayla"],
  permLevel: 0
};

exports.help = {
  name: 'bot-onayla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};