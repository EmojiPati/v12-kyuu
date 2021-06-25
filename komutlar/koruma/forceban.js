const Discord = require("discord.js");
 const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**<:blurplecross:857907152760078387> Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.**");
    if (!args[0]) {
        return message.channel.send(`**<:blurpleigne:857930551314874408> Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!**`)
   }
   var sebep = args.slice(1).join(" ");
   var Pirate = args[0]
   var now = new Date()
   if (!sebep) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(Pirate)) {
                   return message.channel.send(`**<:blurpleigne:857930551314874408> Bu Kullanıcı Zaten Yasaklanmış**`)
               }
               message.guild.ban(Pirate, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<:blurpleyes:857917858025439242> <@!${user.id}> **adlı kullanıcı banlandı**`);
                   })
                   .catch(error => {
                       message.channel.send(`<:blurpleno:857917856041271336> Bir Hata Oluştu`);
                       console.error(':x: Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(Pirate)) {
                   return message.channel.send(`<:blurpleno:857917856041271336> Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.ban(Pirate, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<:blurpleyes:857917858025439242> <@!${user.id}> **sunucudan yasaklandı**`);
                   })
                   .catch(error => {
                       message.channel.send(`<:redno:849732347343798342> Bir Hata Oluştu`);
                       console.error(' Hata:', error);
                   });
           });
   }
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["force-ban"],
  permLevel: 0
}

exports.help = {
  name: 'zorla-yasakla'
};