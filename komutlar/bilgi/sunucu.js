const Discord = require('discord.js');
const dragon = require("../../ayarlar.json");
const db = require('quick.db')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 

  const bot = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Sunucu Yardım Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurpleayarlar:857907152315744278> __Duyuru__ » \`${prefix}duyuru\` `,`➥ ***Sunucunuzda Duyuru Yapar***`)
.addField(`> <:blurpleayarlar:857907152315744278> __Oylama__ » \`${prefix}oylama\` `,`➥ ***Sunucunuzda Oylama Yapar***`)
.addField(`> <:blurpleayarlar:857907152315744278> __Otorol__ » \`${prefix}otorol\` `,`➥ ***Sunucunuzda Otorol Ayarlar***`)
.addField(`> <:blurpleayarlar:857907152315744278> __Oto Cevap__ » \`${prefix}otocevap\` `,`➥ ***Sunucunuzda OtoCevap Ayarlar***`)
.addField(`> <:blurpleayarlar:857907152315744278> __Sayaç__ » \`${prefix}sayaç\` `,`➥ ***Sunucunuzda Sayaç Ayarlar***`)
.addField(`> <:blurpleayarlar:857907152315744278> __Sunucu Kur__ » \`${prefix}sunucu-kur\` `,`➥ ***Hazır Sunucu Kurar***`)
.addField(`» <:blurplelink:857907168430391336> Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=856882009451921468&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
    msg.channel.send(bot)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["server"],
  permLevel: 0
}

exports.help = {
  name: 'sunucu'
};