 const Discord = require("discord.js")
 const { attention, yes, mention, channele, msg } = require('../../emoji.json')
 const ayarlar = require('../../ayarlar.json')
 const db = require('quick.db')
 exports.run = async (client, message, args, db, ) => {
   let prefix = ayarlar.prefix   
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**Gerekli İzinlere Sahip Değilsin.**`)
    let channel = message.mentions.channels.first();
    if(!channel) return message.channel.send(`<:blurpleigne:857930551314874408>  **__Doğru Kullanım__** : \`${prefix}reaksiyon-ekle <#Kanal> <MesajId> <Rol> <Emoji>\``)
        if(!args[1]) return message.channel.send(`<:blurpleigne:857930551314874408>  **__Doğru Kullanım__** : \`${prefix}reaksiyon-ekle ${channel} <MesajId> <Rol> <Emoji>\``)        
    
    let messageid = client.channels.cache.get(`${channel.id}`).messages.fetch(`${args[1]}`)
     if(!messageid) return message.channel.send(`**Bu geçerli bir mesaj kimliği değil** `)
    
    if(isNaN(args[1])) return message.channel.send(`Mesaj Kimliği Bir Sayı Olmalıdır`)
    let role = message.mentions.roles.first();
    if(!role) return message.channel.send(`${prefix}reaksiyon-ekle ${channel} ${args[1]} <@rol> <Emoji> `)
    let check = message.guild.roles.cache.find(r => r.name === `${role.name}`)
    if(!check) return message.channel.send(`Geçersiz Rol!`)
    if(!args[3]) return message.channel.send(`${prefix}reaksiyon-ekle ${channel} ${args[1]} ${role.name} <EMOJI> `)
    function isCustomEmoji(emoji) {
        return emoji.split(":").length == 1 ? false : true;
      }
      if (isCustomEmoji(args[3])) {
      let customemoji = Discord.Util.parseEmoji(args[3]);
    let emojicheck = client.emojis.cache.find(emoji => emoji.id === `${customemoji.id}`);
    if(!emojicheck) return message.channel.send(`Bu Emoji Yanlış!`)
  let embed = new Discord.MessageEmbed()
 .setThumbnail(message.guild.iconURL())
 .setTitle(`${yes} Reaksiyon Rol Başarılı!`)
 .setDescription(`**Done!**
 
 **${msg} [Mesaja Git](https://discord.com/channels/${message.guild.id}/${channel.id}/${args[1]})
 ${mention} Rol : ${role}
 ${attention} [Emoji](https://cdn.discordapp.com/emojis/${emojicheck.id}.png?v=1) : ${emojicheck}
 ${channele} Kanal : ${channel}**
 `)
 .setTimestamp()
 .setFooter(message.guild.name , message.guild.iconURL())

    message.channel.send(embed)
     client.channels.cache.get(`${channel.id}`).messages.fetch(`${args[1]}`).then(a => {
         a.react(emojicheck.id)
      db.set(`rrremove_${message.guild.id}_${args[1]}2`, channel.id)
     db.set(`rrremove_${message.guild.id}_${args[1]}_${args[3]}`, emojicheck.id)
      db.set(`rerremove_${message.guild.id}_${args[1]}`, args[1])
     db.set(`emoteid_${message.guild.id}_${emojicheck.id}`, emojicheck.id)
     db.set(`role_${message.guild.id}_${emojicheck.id}`, role.id)
     db.set(`message_${message.guild.id}_${emojicheck.id}`, args[1])
     return;    
    })
         return;
    }
      db.set(`rrremove_${message.guild.id}_${args[1]}2`, channel.id)
     db.set(`rrremove_${message.guild.id}_${args[1]}_${args[3]}`, args[3])
     db.set(`rerremove_${message.guild.id}_${args[1]}`, args[1])
     db.set(`emoteid_${message.guild.id}_${args[3]}`, args[3])
     db.set(`role_${message.guild.id}_${args[3]}`, role.id)
     db.set(`message_${message.guild.id}_${args[3]}`, args[1])
     let embed = new Discord.MessageEmbed()
     .setThumbnail(message.guild.iconURL())
     .setTitle(`${yes} Reaksiyon Rol Başarılı!`)
     .setDescription(`**Done!**
     
     **${msg} [Mesaja Git](https://discord.com/channels/${message.guild.id}/${channel.id}/${args[1]})
     ${mention} Rol : ${role}
     ${attention} Emoji: ${args[3]}
     ${channele} Kanal : ${channel}**
     `)
     .setTimestamp()
     .setFooter(message.guild.name , message.guild.iconURL())
    
        message.channel.send(embed)
         client.channels.cache.get(`${channel.id}`).messages.fetch(`${args[1]}`).then(a => {
             a.react(args[3])
         })    
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reaksiyon-ekle"],
  permLevel: 0,
};

exports.help = {
  name: 'reaction-ekle',
  description: '',
  usage: 'davet'
};