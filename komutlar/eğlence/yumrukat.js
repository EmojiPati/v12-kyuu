const Discord = require("discord.js");
const db = require('quick.db')
exports.run = async (client, message, args) => { 
    
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  const CrewCodeetiketlenenkisi = message.mentions.users.first();

  if (!CrewCodeetiketlenenkisi)
    return message.channel.send(
      "**Lütfen Yumruk Atmak İçin Birini Etiketleyin**"
    );

  const CrewCodeembed = new Discord.MessageEmbed()

    .setDescription(
      `${CrewCodeetiketlenenkisi}` +
        `**${message.author.username}  Sana Yumruk Attı**`
    )
    .setImage(
      "https://media1.giphy.com/media/f9qqV2Dp84wmIaFjxn/giphy.gif"
    );

  return message.channel.send(CrewCodeembed);
 
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["punch"],
  permLevel: 0
};

exports.help = {
  name: "yumruk-at",
  description: " Yumruk Atarsınız işte ",
  usage: "-yumruk-at"
};