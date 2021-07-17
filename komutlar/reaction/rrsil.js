 const Discord = require("discord.js")
 const { attention, yes, mention, channele, msg } = require('../../emojis.json')
 exports.run = async (client, message, args, db, prefix) => {
    if(!args[0]) return message.channel.send(`<:blurpleigne:857930551314874408>  **__Doğru Kullanım__** : \`${prefix}reaksiyon-sil <MesajId> <Emoji>\``)
    let channel = await db.get(`rrremove_${message.guild.id}_${args[0]}2`)
    let messageid = await db.get(`rerremove_${message.guild.id}_${args[0]}`)

    if(!channel) return message.channel.send(`**Message ID Bulunamadı**`)
    if(!messageid) return message.channel.send(`**Message ID Bulunamadı**`)
    let a = client.channels.cache.get(channel).messages.fetch(args[0])
   if(!a) return message.channel.send(`**Bu Message ID Yanlış**`)
   if(!args[1]) return message.channel.send(`<:blurpleigne:857930551314874408>  **__Doğru Kullanım__** : \`${prefix}reaksiyon-sil <MesajId> <Emoji>`)
   function isCustomEmoji(emoji) {
      return emoji.split(":").length == 1 ? false : true;
    }
    if (isCustomEmoji(args[1])) {

   let customemoji = Discord.Util.parseEmoji(args[1]);
    let emojicheck = client.emojis.cache.find(emoji => emoji.id === `${customemoji.id}`);
   if(!emojicheck) return message.channel.send(`Bu Emoji ID Yanlış!`)

   let emote = await db.get(`rrremove_${message.guild.id}_${args[0]}_${args[1]}`)
   if(!emote) return message.channel.send(`${args[0]} üzerinde ${emojicheck} ile emoji yok`)
   client.channels.cache.get(channel).messages.fetch(args[0]).then(darkcodes => {
darkcodes.reactions.cache.get(`${emojicheck.id}`).remove() 
   })

   let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`**Başarılı**
         Silindi  **${msg} [Mesaja Git](https://discord.com/channels/${message.guild.id}/${channel}/${args[0]})**
      ${attention} Reaksiyon Silindi 
      ${attention} Reaksiyon Rolü Silindi.`)
        .setFooter(message.guild.name , message.guild.iconURL())
        .setTimestamp()
        message.channel.send(embed)
        db.delete(`emoteid_${message.guild.id}_${emojicheck}`)
        db.delete(`emojistatus_${args[0]}_${args[1]}`)
        db.delete(`role_${message.guild.id}_${emojicheck}`)
        db.delete(`message_${message.guild.id}_${emojicheck}`)
       db.delete(`rrremove_${message.guild.id}_${args[0]}2`)
       db.delete(`rrremove_${message.guild.id}_${args[0]}_${args[1]}`)
       db.delete(`rerremove_${message.guild.id}_${args[0]}`)
       return;
}
client.channels.cache.get(channel).messages.fetch(args[0]).then(darkcodes => {
   darkcodes.reactions.cache.get(`${args[1]}`).remove() 
      })
   
      let embed = new Discord.MessageEmbed()
           .setAuthor(message.author.username, message.author.displayAvatarURL())
           .setDescription(`**Başarılı**
           Silindi  **${msg} [Mesaja Git](https://discord.com/channels/${message.guild.id}/${channel}/${args[0]})**
         ${attention} Reaksiyon Silindi
         ${attention} Reaksiyon Rolü Silindi.`)
           .setFooter(message.guild.name , message.guild.iconURL())
           .setTimestamp()
           message.channel.send(embed)
           db.delete(`emojistatus_${args[0]}_${args[1]}`)
           db.delete(`emoteid_${message.guild.id}_${args[1]}`)
           db.delete(`role_${message.guild.id}_${args[1]}`)
           db.delete(`message_${message.guild.id}_${args[1]}`)
          db.delete(`rrremove_${message.guild.id}_${args[0]}2`)
          db.delete(`rrremove_${message.guild.id}_${args[0]}_${args[1]}`)
          db.delete(`rerremove_${message.guild.id}_${args[0]}`)
   
 }
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reaksiyon-sil"],
  permLevel: 0,
};

exports.help = {
  name: 'reaction-sil',
  description: '',
  usage: 'davet'
};