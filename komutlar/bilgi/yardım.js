const Discord = require('discord.js');
const dragon = require("../../ayarlar.json");
const db = require('quick.db')
exports.run = async (client, msg, args) => { 
  let prefix = await db.fetch(`prefix.${msg.guild.id}`) || dragon.prefix 
    
const bot = new Discord.MessageEmbed()    
.setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurpleuser:857907167898239007> __Genel Komutlar__ » \`${prefix}genel\` `,`➥ ***Genel Komutları Gösterir***`)
.addField(`> <:blurpleguard:857907154357977128> __Koruma Komutlar__ » \`${prefix}koruma\` `,`➥ ***Koruma Komutlarını Gösterir***`)
.addField(`> <:blurplesettings:857907152315744278> __Sunucu Komutlar__ » \`${prefix}sunucu\` `,`➥ ***Sunucu Komutlarını Gösterir***`)
.addField(`> <:blurplestar:857907156099792917> __Eğlence Komutlar__ » \`${prefix}eğlence\` `,`➥ ***Eğlence Komutlarını Gösterir***`)
.addField(`> <:blurpleintegrasyon:857907154211045387> __Oyun Komutlar__ » \`${prefix}oyunlar\` `,`➥ ***Oyun Komutlarını Gösterir***`)
.addField(`> <:blurpleplus:857907151573352479> __Eklenti Komutlar(EKLENECEK)__ » \`${prefix}eklenti\` `,`➥ ***Eklenti Komutlarını Gösterir***`)
.addField(`» <:blurplelink:857907168430391336> Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=856882009451921468&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
msg.channel.send(bot)
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help"],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};