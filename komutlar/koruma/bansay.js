const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => { 
 
   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);  
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`<:blurpleno:857917856041271336>  **Banlanan Kullanıcı bulunamadı**`)
       .setColor("0x36393E");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<:blurplelist:857961317179457556>  Banlistesi | Sunucudan Banlananlar")
       .setColor("0x36393E");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-count"],
  permLevel: 0
}

exports.help = {
  name: 'ban-say'
};;