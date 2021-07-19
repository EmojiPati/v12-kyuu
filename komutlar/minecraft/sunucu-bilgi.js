const Discord = require("discord.js");
const fetch = require("node-fetch");
const { no, jeb, saat, cimen, borazan, squid, dragon, bee, portal, silverfish } = require('../../emoji.json')

exports.run = async (client, message, args) => {//hamzamertakbaba#3361

    if (!args[0]) return message.channel.send(`${silverfish} ${message.author} Sunucu IP adresi yazmalısın.`)
    const API = await fetch(`http://mcapi.tc/?${args[0]}/json`)
    const Data = await API.json();
    if (Data.status === "offline") {
        const embed2 = new Discord.MessageEmbed()
            .setColor("#00AA00")
            .setAuthor(args[0])
            .setDescription(`${portal} Girmiş olduğun IP adresine bağlı olan sunucu aktif değil.`)
            .setFooter("");
        message.channel.send(embed2)
    } else {
        const embed = new Discord.MessageEmbed()
            .setColor("#00AA00")
            .setAuthor(args[0])
            .addField(`${jeb} Sunucu IP Adresi`, Data.hostname, true)
            .addField(`${squid} Ping`, Data.ping, true)
            .addField(`${dragon} Oyuncu Sayısı`, `${Data.players}/${Data.max_players}`, true)
            .addField(`${bee} Versiyon`, Data.version, true)
            .setImage(`http://status.mclive.eu/DragonBot/${args[0]}/25565/banner.png`)
            .setFooter("DragonBot 2021.");
        message.channel.send(embed)
    }

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mcsunucubilgi'],
    permLevel: 0
};
exports.help = {
    name: 'mc-sunucubilgi',
  };
