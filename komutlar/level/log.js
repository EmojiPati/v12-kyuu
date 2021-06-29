const Discord = require('discord.js');
const db = require('quick.db')
const dragon = require("../../ayarlar.json");
exports.run = async (client, message, args) => { 

let prefix = await db.fetch(`prefix.${message.guild.id}`) || dragon.prefix     
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  if(args[0] === 'ayarla') {
      if(!kanal) return message.channel.send(`<:blurpleigne:857930551314874408>   **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}seviye-log #Kanal\``)
 
  message.channel.send(`<:blurpleyes:857917858025439242> **Seviye Log Başarıyla \`${kanal}\` Kanalı Olarak Ayarlandı**`)

 
  db.set(`seviyelog_${message.guild.id}`, args[0]) 
  }
  if(args[1] === 'sıfırla') {
      message.channel.send(`<:blurpleyes:857917858025439242> **Seviye Log Başarıyla \`${kanal}\` Kanalı Olarak Ayarlandı**`)
  db.delete(`seviyelog_${message.guild.id}`, args[0]) 
  }
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["seviye-log"],
  permLevel: 0
}

exports.help = {
  name: 'level-log'
};;