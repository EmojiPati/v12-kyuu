const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const { hypesquad, tada, rocket, compass, link, list } = require('../../emoji.json')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Eklenti Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`${hypesquad} Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> ${tada} __Çekiliş Sistemi__ » \`${prefix}çekiliş-sistemi\` `,`➥ ***Gelişmiş Çekiliş Sistemi***`)
.addField(`> ${rocket} __Seviye Sistemi__ » \`${prefix}seviye-sistemi\` `,`➥ ***Gelişmiş Seviye Sistemi***`)
.addField(`> ${compass} __Reaksiyon Sistemi__ » \`${prefix}reaksiyon-sistemi\` `,`➥ ***Gelişmiş React Sistemi***`)
.addField(`> ${list} __Kayıt Sistemi__ » \`${prefix}kayıt-sistemi\` `,`➥ ***Gelişmiş Kayıt Sistemi***`)
.addField(`> ${list} __Minecraft__ » \`${prefix}minecraft\` `,`➥ ***Gelişmiş Minecraft Sistemi***`)
.addField(`> ${list} __Abone Sistemi__ » \`${prefix}abone-sistemi\` `,`➥ ***Gelişmiş Abone Sistemi***`)
.addField(`» ${link} Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["addons"],
  permLevel: 0
}

exports.help = {
  name: 'eklenti'
};