const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Level Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurpletada:859401334523559956> __Çekiliş Başlat__ » \`${prefix}çekiliş-başlat\` `,`➥ ***Manuel olarak bir çekiliş başlatır.***`)
.addField(`> <:blurpletada:859401334523559956> __Çekiliş Edit__ » \`${prefix}çekiliş-edit\` `,`➥ ***Devam eden bir çekilişi düzenler***`)
.addField(`> <:blurpletada:859401334523559956> __Çekiliş Liste__ » \`${prefix}çekiliş-liste\` `,`➥ ***Mevcut çekilişleri listeler.***`)
.addField(`> <:blurpletada:859401334523559956> __Çekiliş Reroll__ » \`${prefix}çekiliş-reroll\` `,`➥ ***Bir çekiliş kazananını yeniden seçer.***`)
.addField(`> <:blurpletada:859401334523559956> __Çekiliş Sil__ » \`${prefix}çekiliş-sil\` `,`➥ ***Çekiliş mesajını siler ve veritabanından kaldırır.***`)
.addField(`> <:blurpletada:859401334523559956> __Çekiliş Bitir__ » \`${prefix}çekiliş-bitir\` `,`➥ ***Bir çekilişi erken bitirir.***`)
.addField(`» <:blurplelink:857907168430391336> Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["seviye-sistemi"],
  permLevel: 0
}

exports.help = {
  name: 'level-sistemi'
};