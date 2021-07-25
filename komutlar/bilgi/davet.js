const Discord = require('discord.js');
const db = require('quick.db')
const {link} = require('../../emoji.json')
exports.run = async (client, msg, args) => { 
  
    const embed = new Discord.MessageEmbed()
        .setTitle(`${client.user.username} Davet `)
        .setDescription(`${link} **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${msg.author.username} Başarıyla Davet Sistemi Kullandı`, msg.author.avatarURL)
    .setColor(`0x36393E`)
msg.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};