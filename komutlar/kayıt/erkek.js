const Discord = require('discord.js');
const db = require('quick.db')
const ms = require("ms");
//EMİRHAN SARAÇ


exports.run = async(client, message, args) => {
              const ayarlar = require('../../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
//EMİRHAN SARAÇ
//EMİRHAN SARAÇ

  let mutel = await db.fetch(`isimerkekRol.${message.guild.id}`);
  let yetkili = await db.fetch(`isimyetkiliRol.${message.guild.id}`);
  let kayitsiz = await db.fetch(`isimkayıtsızRol.${message.guild.id}`);
  let logkanal = await db.fetch(`kayıtlog_${message.guild.id}`)
//EMİRHAN SARAÇ

  if (!yetkili) return
  if (!mutel) return
  if(!message.member.roles.cache.has(yetkili)) {
    const hata = new Discord.MessageEmbed()
    .setAuthor('HATA', message.author.avatarURL())
    .setDescription(`Bu komut için yetersiz izniniz bulunuyor! Yetkili rolüne sahip olmalısınız!`) 
    .setColor('0x36393E')
    .setTimestamp()
    return message.channel.send(hata)
      }
//EMİRHAN SARAÇ

    let kisi = message.mentions.members.first()
    if (!kisi) {
      const hata = new Discord.MessageEmbed()
      .setAuthor('HATA', message.author.avatarURL())
      .setDescription(`Lütfen bir kullanıcıyı etiketleyin!\n\n**Örnek Kullanım:** \n\`\`\`${prefix}e @kullanıcı İsim Yaş\`\`\` `) 
      .setColor('0x36393E')
      .setTimestamp()
      return message.channel.send(hata)
        }
//EMİRHAN SARAÇ

    let isim = args[1];
    if(!isim){
      const hata = new Discord.MessageEmbed()
      .setAuthor('HATA', message.author.avatarURL())
      .setDescription(`Bir isim girmelisin. Kullanıcın iki ismi varsa lütfen bir tanesini giriniz!\n\n**Örnek Kullanım:** \n\`\`\`${prefix}e @kullanıcı İsim Yaş\`\`\` `) 
      .setColor('0x36393E')
      .setTimestamp()
      return message.channel.send(hata)
        }
    if(isim.length > 12) {
      const hata = new Discord.MessageEmbed()
      .setAuthor('HATA', message.author.avatarURL())
      .setDescription(`Lütfen doğru bir isim giriniz! Girdiğiniz isim çok uzun!\n\n**Örnek Kullanım:** \n\`\`\`${prefix}e @kullanıcı İsim Yaş\`\`\` `) 
      .setColor('0x36393E')
      .setTimestamp()
      return message.channel.send(hata)
        }
    let yaş = args[2];
    if(!yaş){
      //EMİRHAN SARAÇ

      const hata = new Discord.MessageEmbed()
      .setAuthor('HATA', message.author.avatarURL())
      .setDescription(`Bir yaş girmelisin!\n\n**Örnek Kullanım:** \n\`\`\`${prefix}e @kullanıcı İsim Yaş\`\`\` `) 
      .setColor('0x36393E')
      .setTimestamp()
      return message.channel.send(hata)
        
  }
    if(yaş.length > 2) {
      const hata = new Discord.MessageEmbed()
      .setAuthor('HATA', message.author.avatarURL())
      .setDescription(`Lütfen doğru bir yaş giriniz! Girdiğiniz yaş çok büyük!\n\n**Örnek Kullanım:** \n\`\`\`${prefix}e @kullanıcı İsim Yaş\`\`\` `) 
      .setColor('0x36393E')
      .setTimestamp()
      return message.channel.send(hata)
        }
    //EMİRHAN SARAÇ

    if (kisi.id === message.author.id) { 
      const hata = new Discord.MessageEmbed()
      .setAuthor('HATA', message.author.avatarURL())
      .setDescription(`Kendinizi kayıt edemezsiniz!`) 
      .setColor('0x36393E')
      .setTimestamp()
      return message.channel.send(hata)
        }

    let toplam = await db.fetch(`toplamkayıt.${message.guild.id}_${kisi.id}`);
//EMİRHAN SARAÇ

        const embed22 = new Discord.MessageEmbed()
        .setTitle(`Mükemmel!`)
  .setDescription(`**${kisi} Kullanıcısına <@&${mutel}> Rolü Verildi!**
  \`\`\`${isim} ${yaş} Olarak Kayıt Edildin!\`\`\`
  `)
    .setFooter(`Komutu kullanan yetkili : ${message.author.username} - Dragon Bot`)  
  .setThumbnail(client.user.avatarURL())
  message.channel.send(embed22)
  message.guild.members.cache.get(kisi.id).setNickname(`${isim} ${yaş}`)
    kisi.roles.add(mutel).then(y => y.roles.remove(kayitsiz))

  db.add(`erkekpuan_${message.guild.id}_${message.author.id}`, 1);
//EMİRHAN SARAÇ

};
//EMİRHAN SARAÇ

//EMİRHAN SARAÇ

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e', 'erkek'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-erkek',
  description: 'Erkek rolü verirsiniz.',
  usage: 'erkek',
};