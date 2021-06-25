const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require('quick.db')
exports.run = async (client, msg, args) => { 
  const timezaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const betastats = new Discord.MessageEmbed()
  .setColor('#ffffff')
    .setImage("")
    .setTimestamp()
    .addField("<:redowner:849738273260699678> **Botun Sahibi**", "<@780135880542650390>")
    .addField("<:redstats:849738276842766368> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - msg.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<:reduser:849726099105906688> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<:reddunya:849738271911444550> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<:redrocket:849726094012710983> **Çalışma Süresi**", timezaman, true)
    .addField("<:redshop:849726094907146280> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<:reddiscordjs:849750460956934167> **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<:redjs:849749857615085589> **Node.JS sürüm**", `${process.version}`, true)
    .addField("<:redlink:849738273042858035> **Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return msg.channel.send(betastats);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","botbilgi","stats"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};