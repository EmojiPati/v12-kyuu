const Discord = require('discord.js')
const db = require('quick.db')
const { attention, igne, no2, yes2, user, mention } = require('../../emoji.json')
exports.run = async (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${attention} **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
let logka = message.mentions.channels.first()
let logkanal = await db.fetch(`botlistlog.${message.guild.id}`)  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`${no2} **Botlist Log Zaten ayarlı değil**`);
    db.delete(`botlistlog.${message.guild.id}`)
   message.channel.send(`${yes2} **Botlist Log başarıyla sıfırlandı.**`);
    return
  } 
if (!logka) return message.channel.send(`${igne} **Bir rol belirtmelisin.**`);
db.set(`botlistlog.${message.guild.id}`, logka.id)
message.channel.send(`**${yes2} Botlist Log başarıyla ${logka} olarak ayarlandı.**`);
 message.react('607634966959882250')
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["botlistlog"],
  permLevel: 0
}

exports.help = {
  name: 'botlist-log'
};