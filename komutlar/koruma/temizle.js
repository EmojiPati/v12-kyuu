const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => { 

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:blurplecross:857907152760078387>  **Bu Komutu Kullanmak İçin İzniniz Yok**");
if(!args[0]) return message.channel.send("<:blurpleigne:857930551314874408>  **Lütfen Silinicek Mesaj Miktarını Yazın!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<:blurpleyes:857917858025439242>  **${args[0]}** **Adet Mesajı Sildim** <:blurpledelete:857907167289540640>`)
})
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil","clear"],
  permLevel: 0
}

exports.help = {
  name: 'temizle'
};