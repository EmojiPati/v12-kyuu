const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Level Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurplerocket:857907158565519360> __Level Ayarla__ » \`${prefix}level-ayarla\` `,`➥ ***Kullanıcı Seviyesini ve XP'yi ayarlar***`)
.addField(`> <:blurplerocket:857907158565519360> __Level Ekle__ » \`${prefix}level-ekle\` `,`➥ ***Belirtilen Kullanıcıya Seviye Ekler***`)
.addField(`> <:blurplerocket:857907158565519360> __Rank__ » \`${prefix}rank\` `,`➥ ***Kullanıcıların Sıralamasını Ve XP sini Gösterir***`)
.addField(`> <:blurplerocket:857907158565519360> __Level Rol__ » \`${prefix}level-rol\` `,`➥ ***Kullanıcı Belirli Bir Seviyeye Yükseldiğinde Rolle Ödüllendirir***`)
.addField(`> <:blurplerocket:857907158565519360> __Level Sil__ » \`${prefix}level-sil\` `,`➥ ***Belirtilen Kullanıcının Seviyesini Azaltır***`)
.addField(`> <:blurplerocket:857907158565519360> __Level Log__ » \`${prefix}level-log ayarla/sıfırla \` `,`➥ ***Belirtilen Kanalı Seviye Log Kanalı Yapar***`)
.addField(`> <:blurplerocket:857907158565519360> __Sıralama__ » \`${prefix}sıralama\` `,`➥ ***En Çok XP Ve En Yüksek Seviyeye Sahip 10 Kullanıcıyı Gösterir***`)
.addField(`» <:blurplelink:857907168430391336> Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çekilişsistemi"],
  permLevel: 0
}

exports.help = {
  name: 'çekiliş-sistemi'
};