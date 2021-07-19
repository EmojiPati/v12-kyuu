const Discord = require('discord.js');
const dragon = require("../../ayarlar.json");
const db = require('quick.db')
const { hypesquad, list, link } = require('../../emoji.json')
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 

const bot = new Discord.MessageEmbed()    
.setAuthor(`${client.user.username} Oyun Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurpleintegrasyon:857907154211045387> __Adam Asmaca__ » \`${prefix}adam-asmaca\` `,`➥ ***Adam asmaca oyununu oynarsınız.***`)
.addField(`> <:blurpleintegrasyon:857907154211045387> __Düello__ » \`${prefix}düello\` `,`➥ ***İstediğiniz bir kişi ile düello atarsınız.!***`)
.addField(`> <:blurpleintegrasyon:857907154211045387> __Yazan Kazanır__ » \`${prefix}writer-wins\` `,`➥ ***Botun verdiği kelimeyi ilk yazan kazanır.!***`)
.addField(`» <:blurplelink:857907168430391336> Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.tr_banner)
msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mc"],
  permLevel: 0
}

exports.help = {
  name: 'minecraft'
};