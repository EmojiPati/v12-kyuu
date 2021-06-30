const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.roles.cache.some((r) => r.name === client.config.giveawayRole)){
        return message.channel.send(`<:blurpleno:857917856041271336> You need to have the ${client.config.giveawayRole} role to do that.`);
    }

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
        message.channel.send(`<:blurpleno:857917856041271336> No giveaway found for \`${messageID}\`, please check you have the right message and try again.`);
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
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
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