const Discord = require('discord.js');
const request = require('request')
const fynx =require("../../ayarlar.json");
const db = require("quick.db");
exports.run = async (client, message, args) => { 

  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.**`);

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:blurpleigne:857930551314874408>  **Doğru kullanım:**   \`${prefix}yavaş-mod [0/120]\``)
                .setColor("0x36393E")
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("**<:blurpleno:857917856041271336> Süre limiti maksimum** **120** **saniye olabilir.**").setColor("0x36393E"));
}
   message.channel.send(new Discord.MessageEmbed().setDescription(`<:blurpleigne:857930551314874408>  **Yazma süre limiti** **${limit}** **saniye olarak ayarlanmıştır**`).setColor("0x36393E"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["slowmod"],
  permLevel: 0
}

exports.help = {
  name: 'yavaş-mod'
};