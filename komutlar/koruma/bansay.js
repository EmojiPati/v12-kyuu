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
       .setTitle(`<:redno:849732347343798342>  **Banlanan Kullanıcı bulunamadı**`)
       .setColor("#ffffff");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<:redlist:851373813634564127>  Banlistesi | Sunucudan Banlananlar")
       .setColor("#ffffff");
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