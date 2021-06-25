const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, msg, args) => { 
  let p = args[0];
 
let embed = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.addField("<:blurpleinternet:857907157961801778> **__Gecikme Sürem__**", `**${client.ws.ping}** ms Olarak Hesaplandı.`,true)
msg.channel.send(embed)
}


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' };