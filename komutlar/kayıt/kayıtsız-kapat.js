const Discord = require('discord.js');
const db = require('quick.db');
const { attention, igne, no2, yes2, user, mention } = require('../../emoji.json')

exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${attention} Bu komutu kullanabilmek için \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`)  
                    let özellik = await db.fetch(`isimkayıtsızRol.${message.guild.id}`);
                    if(!özellik) {
     //EMİRHAN SARAÇ
                  const hata = new Discord.MessageEmbed()
                       .setAuthor('HATA', message.author.avatarURL())
            //EMİRHAN SARAÇ
           .setDescription(`${no2} Kayıtsız rolü zaten ayarlanmamış bu yüzden kapatamazsın!`) 
                       .setColor('0x36393E')
                       .setTimestamp()
                       return message.channel.send(hata)
          //EMİRHAN SARAÇ
               }
    db.delete(`isimkayıtsızRol.${message.guild.id}`)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL())
    .setDescription(`${yes2} Kayıtsız rolü başarıyla silindi!`)
    .setTimestamp()
    .setColor("0x36393E")
    //EMİRHAN SARAÇ

     return message.channel.send(embed)
    
};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ['kayıt-kayıtsız-role-kapat'],
 permLevel: 0
};

exports.help = {
 name: 'kayıt-kayıtsız-role-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};