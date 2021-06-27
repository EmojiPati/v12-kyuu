const Discord = require('discord.js');
const db = require('quick.db')
const fynx = require("../../ayarlar.json");
exports.run = async (client, message, args) => { 

let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<:blurpleigne:857930551314874408>   **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n `**__Örnek__**: ${prefix}sayaç-bb-mesaj -uyetag-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send('<:blurpleyes:857917858025439242>  **Sayaç Görüşürüz mesajı**\n `'+mesaj+'`\n **Olarak ayarlandı!**') 
 db.set(`sayacBB_${message.guild.id}`, mesaj)  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["counter-bye-message"],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-bb-mesaj'
};