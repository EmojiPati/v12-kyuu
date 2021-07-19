const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const { hypesquad, yt, link, } = require('../../emoji.json')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Abone Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`${hypesquad} Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> ${yt} __Abone__ » \`${prefix}abone\` `,`➥ ***Gerekli Şartları Karşılayana Abone Rolü Verir***`)
.addField(`> ${yt} __Abone Rol__ » \`${prefix}abone-rol\` `,`➥ ***Abone Rolünü Ayarlar***`)
.addField(`> ${yt} __Yetkili Rol__ » \`${prefix}abone-yetkili-rol\` `,`➥ ***Abone Yetkilisinin Rolünü Ayarlar***`)
.addField(`> ${yt} __Abone Log__ » \`${prefix}abone-log\` `,`➥ ***Logların Gideceği Kanalı Ayarlar***`)
.addField(`» ${link} Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abonesistemi"],
  permLevel: 0
}

exports.help = {
  name: 'abone-sistemi'
};