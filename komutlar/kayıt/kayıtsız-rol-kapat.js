const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
                    let özellik = await db.fetch(`isimkayıtsızRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.MessageEmbed()
          //EMİRHAN SARAÇ
             .setAuthor('HATA', message.author.avatarURL())
                       .setDescription(`Kayıtsız rolü zaten ayarlanmamış bu yüzden kapatamazsın!`) 
                       .setColor('0x36393E')
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimkayıtsızRol.${message.guild.id}`)
//EMİRHAN SARAÇ

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL())
    .setDescription(`Kayıtsız rolü başarıyla verilerden silindi!`)
    .setTimestamp()
    .setColor("0x36393E")
    //EMİRHAN SARAÇ

     return message.channel.send(embed)
    //EMİRHAN SARAÇ

};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ['kayıt-kayıtsız-rol-kapat'],
 permLevel: 0
};

exports.help = {
 name: 'kayıt-kayıtsız-role-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};