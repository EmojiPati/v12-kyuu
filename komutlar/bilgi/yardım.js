const Discord = require('discord.js');
const dragon = require("../../ayarlar.json");
const db = require('quick.db')
const { user, hypesquad, guard, settings, star, integrasyon, plus, link } = require('../../emoji.json')
exports.run = async (client, msg, args) => { 
  let prefix = await db.fetch(`prefix.${msg.guild.id}`) || dragon.prefix 
    
const bot = new Discord.MessageEmbed()    
.setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`${hypesquad} Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> ${user} __Genel Komutlar__ » \`${prefix}genel\` `,`➥ ***Genel Komutları Gösterir***`)
.addField(`> ${guard} __Koruma Komutlar__ » \`${prefix}koruma\` `,`➥ ***Koruma Komutlarını Gösterir***`)
.addField(`> ${settings} __Sunucu Komutlar__ » \`${prefix}sunucu\` `,`➥ ***Sunucu Komutlarını Gösterir***`)
.addField(`> ${star} __Eğlence Komutlar__ » \`${prefix}eğlence\` `,`➥ ***Eğlence Komutlarını Gösterir***`)
.addField(`> ${integrasyon} __Oyun Komutlar__ » \`${prefix}oyunlar\` `,`➥ ***Oyun Komutlarını Gösterir***`)
.addField(`> ${plus} __Eklenti Komutlar__ » \`${prefix}eklenti\` `,`➥ ***Eklenti Komutlarını Gösterir***`)
.addField(`» ${link} Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
msg.channel.send(bot)
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help"],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};