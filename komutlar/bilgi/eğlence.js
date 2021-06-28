const Discord = require('discord.js');
const db = require('quick.db');
const dragon = require("../../ayarlar.json");
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed() 
.setAuthor(`${client.user.username} Eğlence Yardım Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurplestar:857907156099792917> __Ara 112__ » \`${prefix}ara112\` `,`➥ ***Ambulans Çağırır (ciddiye almayın)***`)
.addField(`> <:blurplestar:857907156099792917> __Araba__ » \`${prefix}araba\` `,`➥ ***Araba Gifi Atar***`)
.addField(`> <:blurplestar:857907156099792917> __Atatürk__ » \`${prefix}atatürk\` `,`➥ ***Ulu Önder Mustafa Kemal Atatürkü Rahmet Ve Saygıyla Anıyoruz***`)
.addField(`> <:blurplestar:857907156099792917> __Ağla__ » \`${prefix}ağla\` `,`➥ ***Botu Ağlatırsınız***`)
.addField(`> <:blurplestar:857907156099792917> __Aşk Ölçer__ » \`${prefix}aşk-ölçer\` `,`➥ ***Aşk Ölçer***`)
.addField(`> <:blurplestar:857907156099792917> __Balık Tut__ » \`${prefix}balık-tut\` `,`➥ ***Balık Tutarsın***`)
.addField(`> <:blurplestar:857907156099792917> __Bu Sana__ » \`${prefix}bu-sana\` `,`➥ ***Bu Sana Gelsin :wink:***`)
.addField(`> <:blurplestar:857907156099792917> __Emoji Yazı__ » \`${prefix}emoji-yazı\` `,`➥ ***Mesajınızı emoji haline getirir***`)
.addField(`> <:blurplestar:857907156099792917> __Espri__ » \`${prefix}espri\` `,`➥ ***Bot Rastgele Espri Atar***`)
.addField(`> <:blurplestar:857907156099792917> __FBI__ » \`${prefix}fbi\` `,`➥ ***FBI Gif Atar***`)
.addField(`> <:blurplestar:857907156099792917> __Yumruk At__ » \`${prefix}yumruk-at\` `,`➥ ***Yumruk Atarsınız***`)
.addField(`» <:blurplelink:857907168430391336> Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
msg.channel.send(bot)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["funny"],
  permLevel: 0
}

exports.help = {
  name: 'eğlence'
};