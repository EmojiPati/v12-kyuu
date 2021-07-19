const Discord = require('discord.js');
const dragon = require("../../ayarlar.json");
const db = require('quick.db')
const { hypesquad, cimen, c, link } = require('../../emoji.json')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 

const bot = new Discord.MessageEmbed()    
.setAuthor(`${client.user.username} Oyun Menüsü`,client.user.avatarURL())
.setColor('#00AA00')
.setDescription(`${hypesquad} Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> ${cimen} __Craftrise İstatistik__ » \`${prefix}craftrise\` `,`➥ ***Belirtilen Kullanıcının Craftrise daki İstatistiğini Gösterir***`)
.addField(`> ${cimen} __SonOyuncu İstatistik (EKLENECEK)__ » \`${prefix}sonoyuncu\` `,`➥ ***Belirtilen Kullanıcının Craftrise daki İstatistiğini Gösterir***`)
.addField(`> ${cimen} __Başarım__ » \`${prefix}mc-başarım\` `,`➥ ***İstediğiniz Yazıyı Başarım Olarak Atar.***`)
.addField(`> ${cimen} __Skin__ » \`${prefix}mc-skin\` `,`➥ ***Belirtilen Minecraft Kullanıcısının Skinini Atar.!***`)
.addField(`> ${cimen} __Sunucu Bilgi__ » \`${prefix}mc-sunucubilgi\` `,`➥ ***Belirtilen Sunucunun Durumunu Atar.!***`)
.addField(`» ${link} Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mc"],
  permLevel: 0
}

exports.help = {
  name: 'minecraft'
};