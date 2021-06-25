const Discord = require('discord.js');
const fs = require('fs');
 const db = require('quick.db');
const fynx = require("../../ayarlar.json");
exports.run = async (client, message, args) => { 
 
  
  
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<:blurpleigne:857930551314874408>  **Mod Log Kanalı Ayarlanmamış | ${prefix}modlog #kanal**`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
 if (isNaN(user)) return message.channel.send('<:blurpleigne:857930551314874408>  **Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin**');
  if (reason.length < 1) return message.channel.send('<:blurpleigne:857930551314874408>  **Lütfen Sebep Giriniz**');
 
  
  const embed = new Discord.MessageEmbed()
  .setColor("0x36393E")
  .addField('<:blurplebanhammer:857959558672416810>  İşlem', 'Ban Kaldırma')
  .addField('<:blurpleuser:857907167898239007>  Banı Açılan Üye', `(${user})`)
  .addField('<:blurplestaff:857907168707215382>  Banı Açan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<:blurplesearch:857907164013264906>  Banı Açma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  message.guild.members.unban(user);
  

  
  const embed2 = new Discord.MessageEmbed()
  .setColor("0x36393E")
  .setDescription(`<:blurpleyes:857917858025439242>  Belirtiğiniz İD'nin Banı Açıldı`)
  message.channel.send(embed2)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unban"],
  permLevel: 0
}

exports.help = {
  name: 'ban-kaldır'
};