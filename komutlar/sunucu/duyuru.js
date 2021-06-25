const Discord = require('discord.js');
const db = require('quick.db')
   exports.run = async (client, message, args) => { 
  let p = args[0];
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:redyasak:849738280756969483>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
   let question = args.join(' ');
   let user = message.author.username
    const embedd = new Discord.MessageEmbed()
     .setDescription(`Yazı Yazman Gerek`);
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));
     const embed = new Discord.MessageEmbed()
       .setColor("#ffffff")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Dragon', client.user.avatarURL)
       .addField(`**Dragon Bot | Duyuru**`, `<:redduyuru:849738271906332722> **${question}**`)
     message.channel.send(embed).then(function(message) {
       });
  }
     else {
       
       
       
       
       
       
       
       
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:redyasak:849738280756969483>   **You must have "\`Administrator\`" privilege to use this command.**`);
   let question = args.join(' ');
   let user = message.author.username
    const embedd = new Discord.MessageEmbed()
     .setDescription(`You Need To Write`);
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));
     const embed = new Discord.MessageEmbed()
       .setColor("#ffffff")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Dragon', client.user.avatarURL)
       .addField(`**Dragon Bot | Announcement**`, `<:redduyuru:849738271906332722> **${question}**`)
     message.channel.send(embed).then(function(message) {
       });
  }      
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