const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
           if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<:blurplecross:857907152760078387> Bu komutu kullanma izniniz yok!`);


    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send('<:blurpleno:857917856041271336> Geçerli bir mesaj kimliği belirtmelisiniz!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        message.channel.send(`<:blurpleno:857917856041271336> \`${messageID}\` için çekiliş bulunamadı, lütfen doğru mesajı alıp almadığınızı kontrol edin ve tekrar deneyin.`);
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID, {
        messages: {
            congrat: client.config.giveawayEmoji + 'Yeni kazanan(lar) : {winners}! Tebrikler!'
        }
    })
    .then(() => {
        // Success message
        message.channel.send('<:blurpleyes:857917858025439242> çekiliş yeniden düzenlendi!');
    })
    .catch((e) => {
        if(e.startsWith(`${giveaway.messageID} mesaj kimliğine sahip çekiliş sona ermedi.`)){
            message.channel.send('Bu çekiliş bitmedi!');
        } else {
            console.error(e);
            message.channel.send('<:blurpleno:857917856041271336> Bir hata oluştu');
        }
    });

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekiliş-reroll"],
  permLevel: 0,
};

exports.help = {
  name: 'çekiliş-reroll',
  description: '',
  usage: 'davet'
};