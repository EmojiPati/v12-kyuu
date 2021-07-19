const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const { hypesquad, list, link } = require('../../emoji.json')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Kayıt Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`${hypesquad} Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> ${list} __Erkek Kayıt__ » \`${prefix}erkek\` `,`➥ ***Belirtilen Kullanıcıyı Erkek Olarak Kayıt Eder***`)
.addField(`> ${list} __Kadın Kayıt__ » \`${prefix}kadın\` `,`➥ ***Belirtilen Kullanıcıyı Kadın Olarak Kayıt Eder***`)
.addField(`> ${list} __Erkek Rol__ » \`${prefix}kayıt-erkek-rol\` `,`➥ ***Belirtilen Rolü Erkek Rol Olarak Ayarlar***`)
.addField(`> ${list} __Kadın Rol__ » \`${prefix}kayıt-kadın-rol\` `,`➥ ***Belirtilen Rolü Kadın Rol Olarak Ayarlar***`)
.addField(`> ${list} __Yetkili Rol__ » \`${prefix}kayıt-yetkili-rol\` `,`➥ ***Belirtilen Rolü Yetkili Rol Olarak Ayarlar***`)
.addField(`> ${list} __Kayıtsız Rol__ » \`${prefix}kayıt-kayıtsız-rol\` `,`➥ ***Belirtilen Rolü Kayıtsız Rol Olarak Ayarlar***`)
.addField(`> ${list} __Kayıt Kanal__ » \`${prefix}kayıt-kanal\` `,`➥ ***Belirtilen Kanalı Kayıt Kanalı Olarak Ayarlar***`)
.addField(`> ${list} __Kayıt Log__ » \`${prefix}kayıt-log\` `,`➥ ***Belirtilen Kanalı Kayıt Log Olarak Ayarlar***`)
.addField(`> ${list} __İstatistik__ » \`${prefix}kayıt-istatistik\` `,`➥ ***Kayıt İstatistiklerini Gösterir***`)
.addField(`> ${list} __Kayıt Kapat__ » \`${prefix}kayıt-kapat\` `,`➥ ***Kayıt Sistemini Kapatır***`)
.addField(`» ${link} Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıtsistemi"],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-sistemi'
};