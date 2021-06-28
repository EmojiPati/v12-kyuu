const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
 
    
         if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor('0x36393E')
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//CrewCode
exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};