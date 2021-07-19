const emirhan = require('discord.js');
const sarac = require('quick.db')


exports.run = async(client, message, args) => {
          const ayarlar = require('../../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
            if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  

  const rol = message.mentions.roles.first()
  
  if (!rol)  {
    const hata = new emirhan.MessageEmbed()
    .setAuthor('HATA', message.author.avatarURL())
    .setDescription(`Rol belirtmeniz gerekiyor! \n\n**Örnek Kullanım:** \n\`\`\`${prefix}isim-kadın-role @roletiket\`\`\``) 
    .setColor('0x36393E')
    .setTimestamp()
    return message.channel.send(hata)
      
  }//EMİRHAN SARAÇ

  sarac.set(`isimkadınRol.${message.guild.id}`, rol.id)
  const embed = new emirhan.MessageEmbed()
  .setAuthor(`Başarılı!`, message.author.avatarURL())
  .setDescription(`İsim kayıt sisteminde kullanılacak olan **kadın** rolü: <@&${rol.id}> olarak seçildi!`)
  .setTimestamp()
  .setColor("0x36393E")
  
   return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-kadın-rol'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kadın-role',
  description: 'Kişi susturulunca verilecek rolü ayarlarsınız.',
  usage: 'mute-rol',
};//EMİRHAN SARAÇ
