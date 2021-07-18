const discord = require('discord.js');
const disbut = require('discord-buttons');

exports.run = async (client, message, args) => {
const disbut = require("discord-buttons");
  let button = new disbut.MessageButton()
  .setLabel("Süleyman ile Demir'in süper müper butonu")
  .setID("denemebuton")
  .setStyle("blurple");

message.channel.send("Butonlu muhtişim bir mesaj", button);}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["deneme"],
  permLevel: 0,
};

exports.help = {
  name: 'deneme',
  description: '',
  usage: 'davet'
};