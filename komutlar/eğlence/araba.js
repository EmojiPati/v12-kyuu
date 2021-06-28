const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Gif Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const araba = new Discord.MessageEmbed()
    .setAuthor(message.author.username + "  yolu aç araba geliyor.")
    .setColor('#ffffff')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/779099271441809420/780007024486121492/araba.gif`)
    return message.channel.send(araba);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["car"],
  permLevel: 0
};

exports.help = {
  name: 'araba',
  description: 'araba gifi atar',
  usage: 'araba'
};