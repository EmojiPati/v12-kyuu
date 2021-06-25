const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
     if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:redyasak:849738280756969483>   **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
	if (!message.guild) return message.author.send('<:redigne:849742280721432666>  **Bu Komutu Sunucuda Kulanabilirsiniz**');
    let kullanici = args[0];
    if (!kullanici) return message.channel.send("<:redigne:849742280721432666>  **Banlanan Bir kullanıcının ID'sini belirtmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`<:redno:849732347343798342>  **Bu kullanıcı banlanmamış.**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
const Embed = new Discord.MessageEmbed()
 .setColor('#ffffff')
.setAuthor('Dragon | Ban Sorgulama', client.user.avatarURL())
.setDescription(`<:redstats:849738276842766368>  ${user.tag} **Adlı Kullanıcının Ban Nedeni:** \n\n**${reason || "Neden Belirtilmemiş"}**`)
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