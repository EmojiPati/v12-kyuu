const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const { hypesquad, dbl, link } = require('../../emoji.json')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Botlist Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`${hypesquad} Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> ${dbl} __Başvuru Gidecek Kanal__ » \`${prefix}başvuru-gidecek-kanal\` `,`➥ ***Yapılan Başvuru Sonrası Bot Kontrol Ekibine Gidecek Mesajın Kanalını Ayarlar***`)
.addField(`> ${dbl} __Başvuru Yapılacak Kanal__ » \`${prefix}başvuru-yapılacak-kanal\` `,`➥ ***Başvuru Yapılacak Kanalı Ayarlar***`)
.addField(`> ${dbl} __Log__ » \`${prefix}botlist-log\` `,`➥ ***Logların Gideceği Kanalı Ayarlar***`)
.addField(`> ${dbl} __Bot Rol__ » \`${prefix}bot-rol\` `,`➥ ***Bot Onaylandığında Bota Verilecek Rolü Ayarlar***`)
.addField(`> ${dbl} __Developer Rol__ » \`${prefix}developer-rol\` `,`➥ ***Bot Onaylandığında Sahibine Verilecek Rolü***`)
.addField(`> ${dbl} __Bot Ekle__ » \`${prefix}bot-ekle\` `,`➥ ***Bot Başvurusu Yapar***`)
.addField(`> ${dbl} __Bot Onayla__ » \`${prefix}bot-onayla\` `,`➥ ***Botu Onaylar***`)
.addField(`> ${dbl} __Bot Reddet__ » \`${prefix}bot-reddet\` `,`➥ ***Botu Reddeder***`)
.addField(`» ${link} Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["botlistsistemi"],
  permLevel: 0
}

exports.help = {
  name: 'botlist-sistemi'
};