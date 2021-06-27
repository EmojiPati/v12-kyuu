const Discord = require('discord.js');
const dragon = require("../ayarlar.json");
const db = require('quick.db')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
  let p = args[0];
  let kontrol = await db.fetch(`dil_${msg.guild.id}`);
  if (kontrol == "tr") {

  
  const bot = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Sunucu Yardım Menüsü`,client.user.avatarURL())
.setColor('#FFFFFF')
.setDescription(`<:redhypesquad:849726093488291892> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:redsettings:849726094810677309> __Duyuru__ » \`${prefix}duyuru\` `,`➥ ***Sunucunuzda Duyuru Yapar***`)
.addField(`> <:redsettings:849726094810677309> __Oylama__ » \`${prefix}oylama\` `,`➥ ***Sunucunuzda Oylama Yapar***`)
.addField(`> <:redsettings:849726094810677309> __Otorol__ » \`${prefix}otorol\` `,`➥ ***Sunucunuzda Otorol Ayarlar***`)
.addField(`> <:redsettings:849726094810677309> __Oto Cevap__ » \`${prefix}otocevap\` `,`➥ ***Sunucunuzda OtoCevap Ayarlar***`)
.addField(`> <:redsettings:849726094810677309> __Sayaç__ » \`${prefix}sayaç\` `,`➥ ***Sunucunuzda Sayaç Ayarlar***`)
.addField(`> <:redsettings:849726094810677309> __Sunucu Kur__ » \`${prefix}sunucu-kur\` `,`➥ ***Hazır Sunucu Kurar***`)
.setThumbnail(client.user.avatarURL)
.setImage(dragon.tr_banner)
    msg.channel.send(bot)
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["server"],
  permLevel: 0
}

exports.help = {
  name: 'sunucu'
};