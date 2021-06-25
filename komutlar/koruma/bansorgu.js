const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
     if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
	if (!message.guild) return message.author.send('<:blurpleigne:857930551314874408>  **Bu Komutu Sunucuda Kulanabilirsiniz**');
    let kullanici = args[0];
    if (!kullanici) return message.channel.send("<:blurpleigne:857930551314874408>  **Banlanan Bir kullanıcının ID'sini belirtmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`<:blurpleno:857917856041271336>  **Bu kullanıcı banlanmamış.**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
const Embed = new Discord.MessageEmbed()
 .setColor('0x36393E')
.setAuthor('Dragon | Ban Sorgulama', client.user.avatarURL())
.setDescription(`<:blurplestats:857922916942086154>  ${user.tag} **Adlı Kullanıcının Ban Nedeni:** \n\n**${reason || "Neden Belirtilmemiş"}**`)
message.channel.send(Embed)
    })

    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["query-ban"],
  permLevel: 0
}

exports.help = {
  name: 'ban-sorgu'
};;