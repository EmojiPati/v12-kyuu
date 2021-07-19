const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const { hypesquad, stats, link, } = require('../../emoji.json')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Abone Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`${hypesquad} Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> ${stats} __Me__ » \`${prefix}me\` `,`➥ ***Stats Profilinizi Gösterir***`)
.addField(`> ${stats} __Stats Sıfırla__ » \`${prefix}stats-sıfırla\` `,`➥ ***Belirtilen Yöntemin İstatistiklerini Gösterir***`)
.addField(`> ${stats} __En İyiler__ » \`${prefix}stats-eniyi\` `,`➥ ***Sunucudaki En İyileri Gösterir***`)
.addField(`» ${link} Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["statssistemi"],
  permLevel: 0
}

exports.help = {
  name: 'stats-sistemi'
};