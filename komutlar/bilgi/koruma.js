const Discord = require('discord.js');
const db = require('quick.db');
const dragon = require("../../ayarlar.json");
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed() 
.setAuthor(`${client.user.username} Koruma Yardım Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:blurplehypesquad:857920353179009044> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:blurpleguard:857907154357977128> __Anti Raid__ » \`${prefix}anti-raid\` `,`➥ ***Sunucunuzda Anti Raid Koruması Yapar***`)
.addField(`> <:blurpleguard:857907154357977128> __Yasakla__ » \`${prefix}yasakla\` `,`➥ ***Etiketlenen Üyeyi Yasaklar***`)
.addField(`> <:blurpleguard:857907154357977128> __Bansay__ » \`${prefix}ban-say\` `,`➥ ***Sunucuzda Banlanan Üyeleri Sayar***`)
.addField(`> <:blurpleguard:857907154357977128> __Bansorgu__ » \`${prefix}ban-sorgu\` `,`➥ ***Sunucunuzda Banlanan Üyenin Banını Sorar***`)
.addField(`> <:blurpleguard:857907154357977128> __Zorla Ban__ » \`${prefix}zorla-ban\` `,`➥ ***Etiketlenen Üyeyi Zorla Banlar***`)
.addField(`> <:blurpleguard:857907154357977128> __At__ » \`${prefix}at\` `,`➥ ***Etiketlenen Üyeyi Sunucudan Atar***`)
.addField(`> <:blurpleguard:857907154357977128> __Küfür Engel__ » \`${prefix}küfür-engel\` `,`➥ ***Sunucunuzda Küfür Engel Sistemini Açar***`)
.addField(`> <:blurpleguard:857907154357977128> __ModLog__ » \`${prefix}modlog\` `,`➥ ***Sunucunuzda Modlog Sistemi Kurar***`)
.addField(`> <:blurpleguard:857907154357977128> __Reklam Engel__ » \`${prefix}reklam-engel\` `,`➥ ***Sunucunuzda Reklam Engel Sistemini Açar***`)
.addField(`> <:blurpleguard:857907154357977128> __Rol Koruma__ » \`${prefix}rol-koruma\` `,`➥ ***Sunucunuzda Rol Koruma Sistemini Aktifleştirir***`)
.addField(`> <:blurpleguard:857907154357977128> __Slowmode__ » \`${prefix}yavaş-mod\` `,`➥ ***Sunucunuzda Yavaş Mod Ayarlar***`)
.addField(`> <:blurpleguard:857907154357977128> __Temizle__ » \`${prefix}temizle\` `,`➥ ***İstediğiniz Kadar Mesajı Siler***`)
.addField(`> <:blurpleguard:857907154357977128> __Ban Kaldır__ » \`${prefix}ban-kaldır\` `,`➥ ***Etiketlenen Üyenin Yasağını Kaldırır***`)
.addField(`> <:blurpleguard:857907154357977128> __Yasaklı Tag__ » \`${prefix}yasaklı-tag\` `,`➥ ***Sunucunuzda Yasaklı Tag Ayarlar***`)
.addField(`» <:blurplelink:857907168430391336> Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=825659553370734632&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/8KmvJrdnDZ) **|** [Web Sitesi](https://discord.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
.setThumbnail(client.user.avatarURL)
.setImage(dragon.banner)
msg.channel.send(bot)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["guard"],
  permLevel: 0
}

exports.help = {
  name: 'koruma'
};