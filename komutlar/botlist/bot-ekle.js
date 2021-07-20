const Discord = require('discord.js');
const db = require('quick.db');
const { attention, igne, no2, yes, user, mention, dbl, rocket, tac, hashtag, onaylı, loading } = require('../../emoji.json')


module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`bykanal.${message.guild.id}`);
  let kanal2 = await db.fetch(`bgkanal.${message.guild.id}`);
  let kanal3 = await db.fetch(`botlistlog.${message.guild.id}`);
  let westrabasvuruyapılacakkanal = await db.fetch(`bykanal.${message.guild.id}`, kanal.id);
  let westrabasvurugidecekkanal = await db.fetch(`bgkanal.${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`botlistlog.${message.guild.id}`, kanal3.id);

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = westrabasvurugidecekkanal
	let kanald = westrabasvuruyapılacakkanal 
  let log = westralogkanal 
	
  if (message.channel.id !== kanald) return message.channel.send(`${attention} Bu komutu sadece <#${kanald}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
	if (message.channel.id == kanald) {
  if (!botid) return message.channel.send(`${igne} Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!prefix) return message.channel.send(`${igne} Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!onaylımı) return message.channel.send(`${igne} Botunun DBL onaylı olup olmadığını yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("0x36393E")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle(`${dbl} Bot Ekletme`)
  .addField(`${tac} Bot Sahibi:`, message.author.tag)
  .addField(`${rocket} Bot ID:`, botid)
  .addField(`${hashtag} Bot Prefix:`, prefix)
  .addField(`${onaylı} Bot Onaylımı:`, onaylımı)
  client.channels.cache.get(basvuru).send(embed)
    const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`0x36393E`)
    .setFooter(`DragonBot Botlist Sistemi`)
    .setTimestamp()
    .setDescription(`${loading} ${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya eklendi. Botu onaylanmayı bekliyor.`)
  client.channels.cache.get(log).send(westrabumbeyyyy)
  message.channel.send(`${yes} Bot ekleme isteğiniz alındı.`).then(x => x.delete({timeout: 3000}))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botekle"],
  permLevel: 0
};

exports.help = {
  name: 'bot-ekle', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};