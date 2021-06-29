const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../../ayarlar.json');

exports.run = async (client, message, args) => {
  
  if(!message.guild && !message.guild.id) return;

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`<:blurplecross:857907152760078387>  **Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`<:blurpleigne:857930551314874408>  Bunumu Arıyorsun? \n ${prefix}küfür-engel aç/kapat`)
      return message.channel.send(küfürcu0k)
  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '<:blurpleyes:857917858025439242>  **Küfür Engel Aktif!**')
    let lus = await db.fetch(`kufurE_${message.guild.id}`)    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
      .setColor("0x36393E")
    .setDescription('<:blurpleyes:857917858025439242>  **Küfür Engel Başarıyla Açıldı**')
    return message.channel.send(reklamengelcim)
  }  
 if (args [0] == 'kapat') {    
    db.delete(`kufurE_${message.guild.id}`)
   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<:blurpleyes:857917858025439242>  **Küfür Engel Başarıyla Kapatıldı**')
    return message.channel.send(küfürengelcim22)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cursing-block"],
  permLevel: 0
}

exports.help = {
  name: 'küfür-engel'
};