const Discord = require('discord.js');
const ms = require("ms");
 const db = require('quick.db');
const ayarlar = require('../../ayarlar.json');
const prefix = ayarlar.prefix;
exports.run = async (client, message, args) => { 

  let user = message.mentions.users.first();
  if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.**`);
module.exports.run = async (bot, message, args) => {
  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (user.id === message.author.id) return message.channel.send('<:blurplecross:857907152760078387>  **Dostum Kendini Susturamassın**');
  if(!mutekisi) return message.reply(`<:blurpleno:857917856041271336> Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)


  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`<:blurpleno:857917856041271336> Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)

  message.reply(`<:blurpleyes:857917858025439242> <@${mutekisi.id}> kullanıcısı ${args[1]} süresi boyunca mutelendi!`);

  setTimeout(function(){
    message.channel.send(`<:blurpleyes:857917858025439242> <@${mutekisi.id}> Kullanıcı Muteleme Süresi Sona Erdi!`);
  }, ms(mutezaman));

  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: 0
}

exports.help = {
  name: 'sustur'
};