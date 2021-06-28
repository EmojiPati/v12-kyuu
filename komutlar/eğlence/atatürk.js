const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  let p = args[0];
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
    
         if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor('#ffffff')
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
  }else{
    
    
    
            if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Commands Cannot Be Used in Private Messages!**')
    return message.author.send(ozelmesajuyari); }
      const vatan = new Discord.MessageEmbed()
    .setAuthor('We Commemorate Mustafa Kemal Atatürk.')
    .setColor('#ffffff')
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan); 
    
  }
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