const Discord = require('discord.js');
const db = require('quick.db')
  const fynx = require("../../ayarlar.json");
exports.run = async (client, message, args) => { 

let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
if(!args[0]) return message.channel.send(`<:blurpleigne:857930551314874408> Yasaklı tag sistemini kullanabilmek için: ${prefix}**yasaklı-tag ekle tag** yazmalısın.`)
let argümanlar = ['ekle', 'çıkar']
if(!argümanlar.includes(args[0])) return message.channel.send(`<:blurpleigne:857930551314874408> Sadece ${prefix}**yasaklı-tag ekle**/**çıkar** kullanabilirsin.`)
  
if(args[0] === 'ekle') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(tag) return message.channel.send(`<:blurpleigne:857930551314874408> Sadece bir tag ekleyebilirsin.`)
if(!args[1]) return message.channel.send(`<:blurpleigne:857930551314874408> Bir tag yazmalısın.`)
  
await db.set(`banned-tag.${message.guild.id}`, args[1])
  
message.channel.send(new Discord.RichEmbed()
.setDescription(`**<:blurpleyes:857917858025439242> ${args[1]}** tagı yasaklı olarak listeye eklendi.`)
.setColor('0x36393E')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
  
if(args[0] === 'çıkar') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(!tag) return message.channel.send(`<:blurpleigne:857930551314874408> Hiç tag eklememişsin.`)
if(!args[1]) return message.channel.send(`<:blurpleigne:857930551314874408> Bir tag yazmalısın.`)
  
await db.delete(`banned-tag.${message.guild.id}`)
  
message.channel.send(new Discord.RichEmbed()
.setDescription(`**<:blurpleyes:857917858025439242> ${args[1]}** tagı artık yasaklı değil..`)
.setColor('0x36393E')
.setAuthor(message.author.username, message.author.avatarURL)) 
}

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-tag"],
  permLevel: 0
}

exports.help = {
  name: 'yasaklı-tag'
};