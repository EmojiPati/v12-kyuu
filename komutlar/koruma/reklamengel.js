const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../../ayarlar.json');

exports.run = async (client, message, args) => { 

    
  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`<:blurplecross:857907152760078387>  **Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`<:blurpleigne:857930551314874408>  Bunumu Arıyorsun? \n ${prefix}reklam-engel aç/kapat`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '<:blurpleyes:857917858025439242>  **Reklam Engel Aktif!**')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
      .setColor("0x36393E")
    .setDescription('<:blurpleyes:857917858025439242>  **Reklam Engeli Açtım**')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<:blurpleyes:857917858025439242>  **Reklam Engeli Kapattım**')
    return message.channel.send(küfürengelcim22)
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ad-block"],
  permLevel: 0
}

exports.help = {
  name: 'reklam-engel'
};