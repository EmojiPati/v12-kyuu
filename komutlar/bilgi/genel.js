const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Genel Yardım Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurpleuser:857907167898239007> __Avatar__ » \`${prefix}avatar\` `,`➥ ***Etiketlenen Kullanıcının Avatarını Gösterir***`)
.addField(`> <:blurpleuser:857907167898239007> __İstatistik__ » \`${prefix}istatistik\` `,`➥ ***Botun İstatiğini Gösterir***`)
.addField(`> <:blurpleuser:857907167898239007> __Ping__ » \`${prefix}ping\` `,`➥ ***Botun Pingini Gösterir***`)
.addField(`> <:blurpleuser:857907167898239007> __Prefix__ » \`${prefix}prefix ayarla\` `,`➥ ***Botun Prefixini Ayarlar***`)
.addField(`> <:blurpleuser:857907167898239007> __Profil__ » \`${prefix}profil\` `,`➥ ***Etiketlenen Kullanıcının Profilini Gösterir***`)
.addField(`> <:blurpleuser:857907167898239007> __Sunucu Bilgi__ » \`${prefix}sunucu-bilgi\` `,`➥ ***Sunucunun Bilgilerini Gösterir***`)
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
     msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["general"],
  permLevel: 0
}

exports.help = {
  name: 'genel'
};