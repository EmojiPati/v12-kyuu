const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const { hypesquad, compass, link } = require('../../emoji.json')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Reaksiyon Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`${hypesquad} Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> ${compass} __Reaksiyon Ekle__ » \`${prefix}reaksiyon-ekle\` `,`➥ ***Yeni Bir Reaksiyon Ekler***`)
.addField(`> ${compass} __Reaksiyon Sil__ » \`${prefix}reaksiyon-sil\` `,`➥ ***Varolan Bir Reaksiyonu Siler***`)
.addField(`» ${link} Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reaction-sistemi"],
  permLevel: 0
}

exports.help = {
  name: 'reaksiyon-sistemi'
};