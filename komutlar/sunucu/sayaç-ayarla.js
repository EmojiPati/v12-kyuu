const Discord = require('discord.js');
const db = require('quick.db')
const fynx = require("../../ayarlar.json");
exports.run = async (client, message, args) => { 


let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!kanal) return message.channel.send(`<:blurpleigne:857930551314874408>   **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
  
 if(isNaN(args[1])) return message.channel.send(`<:blurpleigne:857930551314874408>   **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
 
 if(message.guild.memberCount > args[1]) return message.channel.send(`<:blurpleigne:857930551314874408>   **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)

 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Dragon Sayaç▬▬▬▬▬▬▬▬▬
║► <:blurpleyes:857917858025439242>  Sayaç Aktif Edildi.
║► <:redstats:849738276842766368>  **${args[1]}** Olarak Güncelledim! 
║► <:blurpleigne:857930551314874408>  Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
║► <:redbildirim:849738265276055593>  ${args[1]} Kişi Olmaya Son :dragon: **${kalan}** :dragon: Kişi Kaldı!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

  
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 

  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["set-counter"],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-ayarla'
};