const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
          if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<:blurplecross:857907152760078387> Bu komutu kullanma izniniz yok!`);


    if(!args[0]){
        return message.channel.send('<:blurpleno:857917856041271336> Geçerli bir mesaj kimliği belirtmelisiniz!');
    }

    let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("<:blurpleyes:857917858025439242> Çekiliş Silindi!");
        }).catch((err) => {
            message.channel.send("<:blurpleno:857917856041271336> \`${messageID}\` için çekiliş bulunamadı, lütfen doğru mesajı alıp almadığınızı kontrol edin ve tekrar deneyin.");
        });

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekiliş-delete"],
  permLevel: 0,
};

exports.help = {
  name: 'çekiliş-sil',
  description: '',
  usage: 'davet'
};