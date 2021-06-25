const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`<:blurpleno:857917856041271336>   **Ayarlanmamış bir özellik sıfırlanamaz! :wink: **`)
 
 
  message.channel.send(`<:blurpleyes:857917858025439242>   **Otorol mesajı başarılı bir şekilde sıfırlandı.**`)

 
 db.delete(`otoRM_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reset-autorole-message"],
  permLevel: 0
}

exports.help = {
  name: 'otorol-mesaj-sıfırla'
};