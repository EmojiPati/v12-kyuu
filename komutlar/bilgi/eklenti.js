const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Eklenti Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurpletada:859401334523559956> __Çekiliş Sistemi(EKLENECEK)__ » \`${prefix}çekiliş-sistemi\` `,`➥ ***Gelişmiş Çekiliş Sistemi***`)
.addField(`> <:blurplerocket:857907158565519360> __Seviye Sistemi__ » \`${prefix}seviye-sistemi\` `,`➥ ***Gelişmiş Seviye Sistemi***`)
.addField(`» <:blurplelink:857907168430391336> Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
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