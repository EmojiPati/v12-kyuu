const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../../ayarlar.json');

exports.run = async (client, message, args) => { 
  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 
  

    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<:blurplecross:857907152760078387>  **Gerekli Yetkin Yok Dostum**')
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<:blurpleigne:857930551314874408>   **Mod Log Kanalı Ayarlanmamış Ayarlamak İçin** | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<:blurpleigne:857930551314874408>  **Lütfen Banlamak İstediğiniz Üyeyi Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<:blurpleigne:857930551314874408>  **Lütfen Sebep Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<:blurplecross:857907152760078387>  **Dostum Kendini Banlıyamazsın**');
  const embed = new Discord.MessageEmbed()
  .setColor("0x36393E")
  .addField('<:blurplebanhammer:857959558672416810>  İşlem', 'Sunucudan Banlama')
  .addField('<:blurpleuser:857907167898239007>  Banlanan Üye', `${user.tag} (${user.id})`)
  .addField('<:blurplestaff:857907168707215382>  Banlayan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<:blurplesearch:857907164013264906>  Ban Sebebi', "```" + reason + "```")
  modlog.send(embed);
  user.send(`\`${message.guild.name}\` **<:blurpleyes:857917858025439242> Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Yasaklandınız** \n **Yetkilinin Girdiği Sebep:** \`${reason}\``)
  message.guild.members.ban(user, 2);
  const embed2 = new Discord.MessageEmbed()
  .setColor("0x36393E")
  .setDescription(`<:blurpleyes:857917858025439242>  **Kullanıcı Başarıyla Banlandı**`)
  message.channel.send(embed2)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban"],
  permLevel: 0
}

exports.help = {
  name: 'yasakla'
};