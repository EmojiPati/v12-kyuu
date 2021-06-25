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
  .setColor("#ffffff")
  .addField('<:blurplebanhammer:857959558672416810>  İşlem', 'Sunucudan Banlama')
  .addField('<:reduser:849726099105906688>  Banlanan Üye', `${user.tag} (${user.id})`)
  .addField('<:redstaff:849738273436729395>  Banlayan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<:redsearch:849726094570946641>  Ban Sebebi', "```" + reason + "```")
  modlog.send(embed);
  user.send(`\`${message.guild.name}\` **<:redyes:849732347464515674> Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Yasaklandınız** \n **Yetkilinin Girdiği Sebep:** \`${reason}\``)
  message.guild.members.ban(user, 2);
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setDescription(`<:redyes:849732347464515674>  **Kullanıcı Başarıyla Banlandı**`)
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