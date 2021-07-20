const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
const ayarlar = require('../../ayarlar.json')
const db = require('quick.db')
exports.run = async (client, message, args) => {
 let prefix = ayarlar.prefix
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField(`:warning: Uyarı :warning:', '\`${prefix}sunucutanıt\` adlı komutu özel mesajlarda kullanamazsın.`)
    return message.author.send(ozelmesajuyari); }
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")
    let kullanildii = JSON.parse(fs.readFileSync('../../sunucutanıt.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.MessageEmbed()
  .setTitle('BAŞARILI')
  .setDescription('Sunucu [Burada](https://discord.gg/8KmvJrdnDZ) Tanıtıldı! \n\n 12 Saat Sonra Sunucunuzu Tekrardan Tanıtabilirsiniz. \n\n Sunucunu Tanıtabilmek İçin Beni [Ekle!](https://discord.com/oauth2/authorize?client_id=825659553370734632&permissions=8&scope=bot)')
  .setColor('0x36393E')
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
            .addField(` Sunucu Sahibi`, message.author.tag, true)
            .addField(` Sunucu İsmi`, message.guild.name, true)
      .addField(` Sunucudakı Üye Sayısı`, message.guild.members.cache.size, true)
      .addField(` Sunucu Davet Linki`, invite.url, true)
            .setColor('0x36393E')
      .setThumbnail(message.guild.iconURL())
       client.channels.cache.get('857559745821278210').send(embed)
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
    
  fs.writeFile('../../sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('../../sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.channel.send({embed: {
      description: '**BAŞARISIZ TANITIM** \n\nBu komut zaten kullanılmış!\n\nSunucunu 12 saate 1 defa tanıtabilirsin! \n\n[Suleymannn Youtube | Discord.js | YouTube](https://discord.gg/8KmvJrdnDZ) \n[Dragon Ekle](https://discord.com/oauth2/authorize?client_id=825659553370734632&permissions=8&scope=bot)'
            }});
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucutanıt"],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-tanıt'
};