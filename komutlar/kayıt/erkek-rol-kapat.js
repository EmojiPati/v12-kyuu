const Discord = require('discord.js');
const db = require('quick.db');
//EMİRHAN SARAÇ

const { attention, igne, no, yes2, user, mention } = require('../../emoji.json')

exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${attention} Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!`)  
                    let özellik = await db.fetch(`isimerkekRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.MessageEmbed()
                       .setAuthor('HATA', message.author.avatarURL())
                       .setDescription(`Erkek rolü zaten ayarlanmamış bu yüzden kapatamazsın!`) 
                       .setColor('0x36393E')
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimerkekRol.${message.guild.id}`)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL())
    .setDescription(`Erkek rolü başarıyla verilerden silindi!`)
    .setTimestamp()
    .setColor("0x36393E")
    //EMİRHAN SARAÇ

     return message.channel.send(embed)
    //EMİRHAN SARAÇ

};
//EMİRHAN SARAÇ

exports.conf = {
  kategori: 'ayarlar',
 aliases: ['kayıt-erkek-rol-kapat'],
 permLevel: 0
};

exports.help = {
 name: 'kayıt-erkek-role-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};//EMİRHAN SARAÇ
