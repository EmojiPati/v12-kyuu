const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");
const ayarlar = require('../../ayarlar.json'); 

exports.run = async (client, message, args) => { 
  moment.locale(db.fetch(`dil_${message.guild.id}`))

let user;
  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);    
    const embed = new Discord.MessageEmbed()
     .setColor('0x36393E')
    .setThumbnail(user.avatarURL)
    .setTitle(`${user.username}#${user.discriminator} Kullanıcı Bilgi'si`)
    .addField("<:blurplestar:857907156099792917> İsim :",`${user.username}#${user.discriminator}`, true)
    .addField("<:blurplestar:857907156099792917> İd :", `${user.id}`, true)
    .addField("<:blurplestar:857907156099792917> Discord Tag :", `#${user.discriminator}`, true)
    .addField("<:blurplestar:857907156099792917> Hesap Oluşturma Tarihi :", `${moment.utc(user.createdAt).format('dddd, MMMM.Do.YYYY, ')}`, true)
    .addField("<:blurplestar:857907156099792917> Sunucuya Katılma Tarihi :", `${moment.utc(member.joinedAt).format('dddd, MMMM.Do.YYYY')}`, true)
    .addField("<:blurplestar:857907156099792917> Durumu :", `${user.presence.status}`, true)
    message.channel.send({embed});
    }

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['user-information'], 
  permLevel: 0 
};

exports.help = {
  name: 'profil', 
  description: 'Etiketlediğin / kendi profilin hakkında bilgi verir.',
  usage: 'kullanıcı-bilgi' 
};