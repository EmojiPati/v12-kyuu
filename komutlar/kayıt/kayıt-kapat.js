const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
//EMİRHAN SARAÇ

    db.delete(`isimerkekRol.${message.guild.id}`)
    db.delete(`isimkadınRol.${message.guild.id}`)
    db.delete(`isimkayıtsızRol.${message.guild.id}`)
    db.delete(`isimyetkiliRol.${message.guild.id}`)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL())
    .setDescription(`Tüm ayarlar kapatıldı!`)
    .setTimestamp()
    .setColor("0x36393E")
    //EMİRHAN SARAÇ

     return message.channel.send(embed)
    
};
//EMİRHAN SARAÇ

exports.conf = {
  kategori: 'ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'kayıt-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};