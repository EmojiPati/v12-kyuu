const Discord = require('discord.js');
const db = require('quick.db');
const { attention, igne, no2, yes2, user, mention } = require('../../emoji.json')
//EMİRHAN SARAÇ

exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu komutu kullanabilmek için \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`)  
                    let özellik = await db.fetch(`isimyetkiliRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.MessageEmbed()
                       .setAuthor('HATA', message.author.avatarURL())
                       .setDescription(`Yetkili rolü zaten ayarlanmamış bu yüzden kapatamazsın!`) 
                       .setColor('0x36393E')
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimyetkiliRol.${message.guild.id}`)
//EMİRHAN SARAÇ

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL())
    .setDescription(`Yetkili rolü başarıyla silindi!`)
    .setTimestamp()
    .setColor("0x36393E")
    
     return message.channel.send(embed)
    //EMİRHAN SARAÇ

};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ['kayıt-yetkili-rol-kapat'],
 permLevel: 0
};

exports.help = {
 name: 'kayıt-yetkili-role-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};