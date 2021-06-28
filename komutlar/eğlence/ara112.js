const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

    
    if (!message.guild) {
          if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
      
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Ambulans Geliyor Dayan!")
    .setColor('0x36393E')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/684463435161010273/685138347848499240/giphy.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["call911"],
  permLevel: 0
};

exports.help = {
  name: 'ara112',
  description: 'Ambulans Çağırır (ciddiye almayın)',
  usage: 'ara112'
};