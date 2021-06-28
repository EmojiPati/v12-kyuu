const Discord = require("discord.js")

const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  const fbi = new Discord.MessageEmbed()
  .setColor("0x36393E")
  .setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")
  .setTitle("FBI!")
  message.channel.send(fbi)

}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [''],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: "fbi",
  description: "FBi gif atar",
  usage:"!fbi"
}