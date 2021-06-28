const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')
exports.run = async (client, message, args) => { 

    
     if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {
    var espriler = [
      "Sazan Tuttun! :fish:",
      "Köpek Balığı Tuttun İyi Para Eder Sat Sat :D",
      "Uskumru Tuttun! :fish:",
      "Mezgit Tuttun! Havyarıda Var hee ;) :fish:",
      "Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?",
      "Hamsi Tuttun! :fish:",
      "Levrek Tuttun! :fish:",
      "Hiçbirşey Tutamadın Maalesef! :wastebasket:",
      "Alabalık Tuttun! :fish:",
      "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
      "İstavrit Tuttun! :fish:",
      "Gümüş Balığı Tuttun! :wastebasket:",
      "Çukra Tuttun!:fish:",
      "Balon Balığı Tuttun, İğneye Dikkat!",
      "Yılan Balığı Tuttun, Allah Çarpıldık!"
    ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    message.edit(`${espri}`);
  });
  };
//CrewCode
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fishing"],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",
  usage: "balıktut"
};