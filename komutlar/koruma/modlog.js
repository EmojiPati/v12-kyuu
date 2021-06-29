const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`<:blurpleigne:857930551314874408>  **Modlog Kanalı Zaten ayarlı değil**`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`<:blurpleyes:857917858025439242>  **ModLog Kanalı başarıyla sıfırlandı.**`);
    return
  } 
if (!logk) return message.channel.send(`<:blurpleigne:857930551314874408>  **Bir modlog kanalı belirtmelisin.**`);
db.set(`log_${message.guild.id}`, logk.id)
message.channel.send(`**<:blurpleyes:857917858025439242> Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.**`);
 message.react('607634966959882250')
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mod-log"],
  permLevel: 0
}

exports.help = {
  name: 'mod-log'
};