const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../../ayarlar.json');
exports.run = async (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || ayarlar.prefix


  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("0x36393E")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        `**<:blurpleigne:857930551314874408> Hatalı kullanım! örnek: \`${prefix}rol-koruma aç && kapat\`**`
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.MessageEmbed()
        .setColor("0x36393E")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**<:blurpleigne:857930551314874408> Görünüşe göre rol koruma zaten aktif!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor("0x36393E")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**<:blurpleyes:857917858025439242> Rol koruma başarıyla açıldı!**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("0x36393E")
      .setTitle("Rol Koruma sistemi!")
      .setDescription("**<:blurpleyes:857917858025439242> Rol Koruma başarıyla kapandı!**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection"],
  permLevel: 0
}

exports.help = {
  name: 'rol-koruma'
};