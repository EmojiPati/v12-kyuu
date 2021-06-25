const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json')
const db = require('quick.db');
const moment = require('moment');
exports.run = async (client, message, args) => { 
  moment.locale(db.fetch(`dil_${message.guild.id}`))
  let p = args[0];
let sunucubölge = {
        "us-central": "Amerika :flag_us:",
        "us-east": "Doğu Amerika :flag_us:",
        "us-south": "Güney Amerika :flag_us:",
        "us-west": "Batı Amerika :flag_us:",
        "eu-west": "Batı Avrupa :flag_eu:",
        "eu-central": "Orta Avrupa :flag_eu:",
        "europe": "Avrupa :flag_eu:",
        "singapore": "Singapur :flag_sg:",
        "london": "Londra :flag_gb:",
        "japan": "Japonya :flag_jp:",
        "russia": "Rusya :flag_ru:",
        "hongkong": "Hong Kong :flag_hk:",
        "brazil": "Brezilya :flag_br:",
        "singapore": "Singapur :flag_sg:",
        "sydney": "Sidney :flag_au:",
        "india": "Hindistan :flag_in:",
        "dubai": "Dubai :flag_ae:",
        "amsterdam": "Amsterdam :flag_nl:",
        "frankfurt": "Frankfurt :flag_de:",
        "southafrica": "Güney Afrika :flag_za:"
    }   
const botlar = message.guild.members.cache.filter(m => m.user.bot).map(bots => `${bots}`).splice(0, 10).join(' ')
const roller = message.guild.roles.cache.filter(a => a.name !== 'everyone' && !a.managed).sort((a, b) => a.position - b.position).map(c => c).reverse().splice(0, 10).join(' ')
let emoji = message.guild.emojis.cache.map(emo => `${emo}`).splice(0, 10).join(' ')
 const embed = new Discord.MessageEmbed()
.setColor('0x36393E')
.setAuthor('Sunucu Bilgi',message.guild.iconURL({ dynamic:true }))
.addField('<:blurplestar:857907156099792917> Sunucu İsmi',`${message.guild.name} \`(${message.guild.id})\``,true)
.addField('<:blurplestar:857907156099792917> Sunucu Sahibi',`<@${message.guild.owner.id}> \`(${message.guild.owner.id})\``,true)
.addField('<:blurplestar:857907156099792917> Oluşturulma Tarihi',`${moment(message.guild.createdAt).format('D MMMM YYYY | HH:MM:SS')}`,true)
.addField('<:blurplestar:857907156099792917> Sunucu Bölgesi',sunucubölge[message.guild.region],true)
.addField('<:blurplestar:857907156099792917> Boost Bilgileri',`${message.guild.premiumTier} Boost | ${message.guild.premiumSubscriptionCount} Seviye`,true)
.addField('<:blurplestar:857907156099792917> Kullanıcılar',`${message.guild.members.cache.filter(m => m.user.presence.status != 'offline').size} / ${message.guild.members.cache.size} Çevrimiçi`,true)
.addField('<:blurplestar:857907156099792917> Kanallar',`${message.guild.channels.cache.size} Toplam (${message.guild.channels.cache.filter(ch => ch.type == 'category').size} Kategori / ${message.guild.channels.cache.filter(ch => ch.type == 'text').size} Yazı / ${message.guild.channels.cache.filter(ch => ch.type == 'voice').size} Sesli)`)
.addField(`<:blurplestar:857907156099792917> Botlar [${message.guild.members.cache.filter(m => m.user.bot).size}]`,botlar ? botlar : '<:blurpleno:857917856041271336> Botlar Listelenemedi')
.addField(`<:blurplestar:857907156099792917> Roller [${message.guild.roles.cache.size-1}]`,roller ? roller : '<:blurpleno:857917856041271336> Hiç Rol Bulunmuyor!')
.addField(`<:blurplestar:857907156099792917> Emojiler [${message.guild.emojis.cache.size}]`,emoji ? emoji: '<:blurpleno:857917856041271336> Emoji Yok')
message.channel.send(embed) 
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['server-information'], 
  permLevel: 0 
};

exports.help = {
  name: 'sunucu-bilgi', 
  description: 'Etiketlediğin / kendi profilin hakkında bilgi verir.',
  usage: 'kullanıcı-bilgi' 
};