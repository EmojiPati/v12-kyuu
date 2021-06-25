const Discord = require('discord.js');
const db = require('quick.db')
  const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
  let p = args[0];
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:redyasak:849738280756969483>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
if(!args[0]) return message.channel.send(`<:redigne:849742280721432666> Yasaklı tag sistemini kullanabilmek için: ${prefix}**yasaklı-tag ekle tag** yazmalısın.`)
let argümanlar = ['ekle', 'çıkar']
if(!argümanlar.includes(args[0])) return message.channel.send(`<:redigne:849742280721432666> Sadece ${prefix}**yasaklı-tag ekle**/**çıkar** kullanabilirsin.`)
  
if(args[0] === 'ekle') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(tag) return message.channel.send(`<:redigne:849742280721432666> Sadece bir tag ekleyebilirsin.`)
if(!args[1]) return message.channel.send(`<:redigne:849742280721432666> Bir tag yazmalısın.`)
  
await db.set(`banned-tag.${message.guild.id}`, args[1])
  
message.channel.send(new Discord.RichEmbed()
.setDescription(`**<:redyes:849732347464515674> ${args[1]}** tagı yasaklı olarak listeye eklendi.`)
.setColor('#ffffff')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
  
if(args[0] === 'çıkar') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(!tag) return message.channel.send(`<:redigne:849742280721432666> Hiç tag eklememişsin.`)
if(!args[1]) return message.channel.send(`<:redigne:849742280721432666> Bir tag yazmalısın.`)
  
await db.delete(`banned-tag.${message.guild.id}`)
  
message.channel.send(new Discord.RichEmbed()
.setDescription(`**<:redyes:849732347464515674> ${args[1]}** tagı artık yasaklı değil..`)
.setColor('#ffffff')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
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