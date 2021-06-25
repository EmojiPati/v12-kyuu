const Discord = require('discord.js');
const db = require('quick.db')
  const dragon = require("../../ayarlar.json");
exports.run = async (client, message, args) => { 

let prefix = await db.fetch(`prefix.${message.guild.id}`) || dragon.prefix     

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<:blurpleigne:857930551314874408>   **Otorol Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n `**__Örnek__**: `otorol-mesaj -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('<:blurpleyes:857917858025439242>   **Oto-Rol mesajı** `'+mesaj+'` **Olarak ayarlandı!**') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["autorole-message"],
  permLevel: 0
}

exports.help = {
  name: 'otorol-mesaj'
};