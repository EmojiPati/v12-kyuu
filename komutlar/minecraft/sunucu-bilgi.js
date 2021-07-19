const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {//hamzamertakbaba#3361

    if (!args[0]) return message.channel.send(`${message.author} Sunucu IP adresi yazmalısın.`)
    const API = await fetch(`http://mcapi.tc/?${args[0]}/json`)
    const Data = await API.json();
    if (Data.status === "offline") {
        const embed2 = new Discord.MessageEmbed()
            .setColor("#00AA00")
            .setAuthor(args[0])
            .setDescription(`Girmiş olduğun IP adresine bağlı olan sunucu aktif değil.`)
            .setFooter("hamzamertakbaba tarafından ♥ ile yapıldı.");
        message.channel.send(embed2)
    } else {
        const embed = new Discord.MessageEmbed()
            .setColor("#00AA00")
            .setAuthor(args[0])
            .addField(`Sunucu IP Adresi`, Data.hostname, true)
            .addField(`Ping`, Data.ping, true)
            .addField(`Oyuncu Sayısı`, `${Data.players}/${Data.max_players}`, true)
            .addField(`Versiyon`, Data.version, true)
            .setImage(`http://status.mclive.eu/Dragon Bot/${args[0]}/25565/banner.png`)
            .setFooter("hamzamertakbaba tarafından ♥ ile yapıldı.");
        message.channel.send(embed)
    }

};
exports.conf = {// codare ♥
    enabled: true,
    guildOnly: false,
    aliases: ['mcsunucubilgi'],
    permLevel: 0
};
exports.help = {// codare ♥
    name: 'mc-sunucubilgi',
  };
