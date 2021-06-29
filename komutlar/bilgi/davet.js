const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, msg, args) => { 
  
    const embed = new Discord.MessageEmbed()
        .setTitle(`${client.user.username} Davet `)
        .setDescription(`<:redlink:849738273042858035> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${msg.author.username} Başarıyla Davet Sistemi Kullandı`, msg.author.avatarURL)
    .setColor(`#ffffff`)
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