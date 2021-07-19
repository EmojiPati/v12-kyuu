const Discord = require(`discord.js`);
const { no, jeb, link } = require('../../emoji.json')

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply(`${no} bir oyuncu adı belirtmelisin.`);
 if (mesaj == member) {
    message.reply(`${no} kullanıcı değil, bir oyuncu adı belirtmelisin :/`)
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('#00AA00')
   .setTitle(`${jeb} Oyuncu: ` + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["mcskin"],
 permLevel: 0
};

exports.help = {
 name: 'mc-skin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcbody '
};