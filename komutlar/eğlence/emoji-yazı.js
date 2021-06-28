const Discord = require('discord.js');

const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': '*️⃣'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }

    if (args.length < 1) return message.reply('Lütfen bir mesaj belirt. **Doğru Kullanım**: emoji-yazı <mesaj>')
        
    message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["emoji-text"],
  permLevel: 0 
};

exports.help = {
  name: 'emoji-yazı', 
  description: 'Mesajınızı emoji haline getirir',
  usage: 'emojiyazı <mesaj>'
};