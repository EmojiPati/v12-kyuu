const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, msg, args) => { 
  let p = args[0];
  
  let user;  
    if (msg.mentions.users.first()) {
      user = msg.mentions.users.first();
    } else {
        user = msg.author;
    }
 const avatar = new Discord.MessageEmbed()
        .setColor("0x36393E")
       .setAuthor(`» Buyur Avatarın`)
        .setImage(user.avatarURL())
    msg.channel.send(avatar)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
   usage:'avatar <@kişi-etiket> veya avatar'
}