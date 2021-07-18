const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
require('discord-buttons')(client);
exports.run = async (message, client) => {
  let button = new disbut.MessageButton()
  .setLabel("This is a button!")
  .setID("myid")
  .setStyle("blurple");

message.channel.send("Message with a button!", button);}


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