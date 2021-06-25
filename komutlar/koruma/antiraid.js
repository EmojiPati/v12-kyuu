const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("<:blurpleigne:857930551314874408> Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("<:blurpleyes:857917858025439242>Anti-raid sistemi başarıyla açıldı");
  }
  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "<:blurpleigne:857930551314874408> Anti-raid açılmamış. Açmak için **-anti-raid aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("<:blurpleyes:857917858025439242> Anti-raid sistemi başarıyla kapatıldı");
  }
  if (!args[0])
    return message.reply(
      "<:blurpleigne:857930551314874408> Lütfen geçerli işlem girin. Örnek: **anti-raid aç/kapat**"
    );
  }
  
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
}

exports.help = {
  name: 'anti-raid'
};