const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../../ayarlar.json');
const embed = new Discord.MessageEmbed()
const { attention, muteli, igne, yes,  mention, staff, search, saat, compass, plus, no, mutesiz } = require('../../emoji.json')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${attention} **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
let modlog = db.fetch(`log_${message.guild.id}`)
let mutelirol = db.fetch(`mutelirol.${message.guild.id}`)
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let user = message.guild.member(member)
  if (!user) return message.channel.send(embed.setDescription(`${attention} ${message.author}, Eksik arguman kullandınız, \`.unmute @etiket/ID\``)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))

  if (user.id === message.author.id) return message.react(no)
  if (user.id === client.user.id) return message.react(no)
  if (user.hasPermission(8)) return message.react(no)


  let data = await db.get(`durum.${user.id}.mute`)
  if (!data) return message.channel.send(embed.setDescription(`${attention} ${user} Adlı kullanıcı zaten muteli değil.`)).then(m > m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))
  if (data) {
      user.roles.remove(mutelirol).catch()
      message.react(yes)
      client.channels.cache.get(modlog).send(embed.setDescription(`${mutesiz} ${user} Adlı kullanıcının metin kanallarındaki susturulması kaldırıldı.
`))
      db.delete(`durum.${user.id}.mute`)
  }



};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unmute"],
  permLevel: 0
}

exports.help = {
  name: 'susturma-kaldır'
};