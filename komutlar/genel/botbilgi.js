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
  .setColor('0x36393E')
    .setImage("")
    .setTimestamp()
    .addField("<:blurpleowner:857917797707415552> **Botun Sahibi**", "<@852596827713962066> | <@780135880542650390>")
    .addField("<:blurplestats:857922916942086154> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - msg.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<:blurpleuser:857907167898239007> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<:blurpledunya:857924089712869377> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<:blurplerocket:857907158565519360> **Çalışma Süresi**", timezaman, true)
    .addField("<:blurpleshop:857907163505885214> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<:blurplediscordjs:857922080628801537> **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<:blurplejs:857921650426249246> **Node.JS sürüm**", `${process.version}`, true)
    .addField("<:blurplelink:857907168430391336> **Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
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