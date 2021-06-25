const Discord = require('discord.js');
const db = require('quick.db')
   exports.run = async (client, message, args) => { 
     
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
   let question = args.join(' ');
   let user = message.author.username
    const embedd = new Discord.MessageEmbed()
     .setDescription(`Yazı Yazman Gerek`);
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));
     const embed = new Discord.MessageEmbed()
       .setColor("0x36393E")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Dragon', client.user.avatarURL)
       .addField(`**Dragon Bot | Duyuru**`, `<:blurpleduyuru:857907166634442762> **${question}**`)
     message.channel.send(embed).then(function(message) {
       });

     };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["announcement"],
  permLevel: 0
}

exports.help = {
  name: 'duyuru'
};