const Discord = require("discord.js");
const fetch = require("node-fetch");
const { no, list, link } = require('../../emoji.json')
exports.run = async (client, message, args) => {
  var kullaniciadi = args.slice(0).join(' ')

  if (!kullaniciadi) {
    const valueerr = new Discord.MessageEmbed()
      .setDescription('Lütfen geçerli bir yazı girin!')
    return message.channel.send(valueerr)
  };

  if (kullaniciadi.length < 3) {
    const lengtherr = new Discord.MessageEmbed()
      .setDescription('Kullanıcı Adı Kısa Olamaz!')
    return message.channel.send(lengtherr)
  }

  fetch(`https://api.rexulec.com/cr/${kullaniciadi}`).then(response => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(data => {
        if (data.status == "404") {
          const usernameerr = new Discord.MessageEmbed()
            .setDescription(`${no} Bu kullanıcı adı ile bir hesap yok. Geçerli bir isim girmeyi deneyin!`)
          message.channel.stopTyping();
          return message.channel.send(usernameerr)
        }
      });
    } else {
      const finalcode = new Discord.MessageEmbed()
        .setColor('#00AA00')
        .setTitle(`${kullaniciadi} İçin Bilgiler..`)
        .setImage(`https://api.rexulec.com/cr/${kullaniciadi}`)
      message.channel.send(finalcode);
    }
  })

}

exports.conf = {
  aliases: ['craftrise'],
  permLevel: 0,
  kategori: "Eğlence",
};

exports.help = {
  name: 'Craftrise-stats',
  description: 'İstediğiniz kişinin Craftrise istatisliklerini gösterir.',
  usage: 'craftrise <Kullanıcı Adı>',
};