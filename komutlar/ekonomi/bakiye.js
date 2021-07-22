const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  let user = message.mentions.members.first() || message.author;

  let para = db.fetch(`para.${message.guild.id}_${user.id}`)

  if (para === null) para = 0;

  let banka = await db.fetch(`banka.${message.guild.id}_${user.id}`)
  if (banka === null) banka = 0;
let embed = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`💸 ${user} Adlı Kullanıcının Bakiyesi`)
.addField(`👤 **_Üzerindeki Para_** : \` ${para} \``)
.addField(`🏦 **_Bankasındaki Parası_** : \` ${banka} \``)
message.channel.send(embed)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["balance"],
  permLevel: 0
}

exports.help = {
  name: 'bakiye'
};