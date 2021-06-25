const Discord = require('discord.js');
const dragon = require("../../ayarlar.json");
const db = require('quick.db')
exports.run = async (client, msg, args) => { 
  let prefix = await db.fetch(`prefix.${msg.guild.id}`) || dragon.prefix 
  let p = args[0];
    
const bot = new Discord.MessageEmbed()    
.setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:redhypesquad:849726093488291892> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:reduser:849726099105906688> __Genel Komutlar__ » \`${prefix}genel\` `,`➥ ***Genel Komutları Gösterir***`)
.addField(`> <:redguard:849738272200458271> __Koruma Komutlar__ » \`${prefix}koruma\` `,`➥ ***Koruma Komutlarını Gösterir***`)
.addField(`> <:redsettings:849726094810677309> __Sunucu Komutlar__ » \`${prefix}sunucu\` `,`➥ ***Sunucu Komutlarını Gösterir***`)
.addField(`> <:redstar:849726094931263558> __Eğlence Komutlar__ » \`${prefix}eğlence\` `,`➥ ***Eğlence Komutlarını Gösterir***`)
.addField(`> <:redgamepad:849726093370851328> __Oyun Komutlar__ » \`${prefix}oyunlar\` `,`➥ ***Oyun Komutlarını Gösterir***`)
.addField(`> <:redplus:849726093660651570> __Eklenti Komutlar(EKLENECEK)__ » \`${prefix}eklenti\` `,`➥ ***Eklenti Komutlarını Gösterir***`)
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=856882009451921468&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/aEUfsU9) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
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