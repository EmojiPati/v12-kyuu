const Discord = require('discord.js');
const db = require('quick.db');
const dragon = require("../../ayarlar.json");
const prefix = dragon.prefix
exports.run = async (client, msg, args) => { 
    
const bot = new Discord.MessageEmbed() 
.setAuthor(`${client.user.username} Koruma Yardım Menüsü`,client.user.avatarURL())
.setColor('0x36393E')
.setDescription(`<:redhypesquad:849726093488291892> Dragon botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`> <:redguard:849738272200458271> __Anti Raid__ » \`${prefix}anti-raid\` `,`➥ ***Sunucunuzda Anti Raid Koruması Yapar***`)
.addField(`> <:redguard:849738272200458271> __Yasakla__ » \`${prefix}yasakla\` `,`➥ ***Etiketlenen Üyeyi Yasaklar***`)
.addField(`> <:redguard:849738272200458271> __Bansay__ » \`${prefix}ban-say\` `,`➥ ***Sunucuzda Banlanan Üyeleri Sayar***`)
.addField(`> <:redguard:849738272200458271> __Bansorgu__ » \`${prefix}ban-sorgu\` `,`➥ ***Sunucunuzda Banlanan Üyenin Banını Sorar***`)
.addField(`> <:redguard:849738272200458271> __Zorla Ban__ » \`${prefix}zorla-ban\` `,`➥ ***Etiketlenen Üyeyi Zorla Banlar***`)
.addField(`> <:redguard:849738272200458271> __At__ » \`${prefix}at\` `,`➥ ***Etiketlenen Üyeyi Sunucudan Atar***`)
.addField(`> <:redguard:849738272200458271> __Küfür Engel__ » \`${prefix}küfür-engel\` `,`➥ ***Sunucunuzda Küfür Engel Sistemini Açar***`)
.addField(`> <:redguard:849738272200458271> __ModLog__ » \`${prefix}modlog\` `,`➥ ***Sunucunuzda Modlog Sistemi Kurar***`)
.addField(`> <:redguard:849738272200458271> __Reklam Engel__ » \`${prefix}reklam-engel\` `,`➥ ***Sunucunuzda Reklam Engel Sistemini Açar***`)
.addField(`> <:redguard:849738272200458271> __Rol Koruma__ » \`${prefix}rol-koruma\` `,`➥ ***Sunucunuzda Rol Koruma Sistemini Aktifleştirir***`)
.addField(`> <:redguard:849738272200458271> __Slowmode__ » \`${prefix}yavaş-mod\` `,`➥ ***Sunucunuzda Yavaş Mod Ayarlar***`)
.addField(`> <:redguard:849738272200458271> __Temizle__ » \`${prefix}temizle\` `,`➥ ***İstediğiniz Kadar Mesajı Siler***`)
.addField(`> <:redguard:849738272200458271> __Ban Kaldır__ » \`${prefix}ban-kaldır\` `,`➥ ***Etiketlenen Üyenin Yasağını Kaldırır***`)
.addField(`> <:redguard:849738272200458271> __Yasaklı Tag__ » \`${prefix}yasaklı-tag\` `,`➥ ***Sunucunuzda Yasaklı Tag Ayarlar***`)
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