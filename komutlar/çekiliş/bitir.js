const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.roles.cache.some((r) => r.name === client.config.giveawayRole)){
        return message.channel.send(`:x: You need to have the ${client.config.giveawayRole} role to do that.`);
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Geçerli bir mesaj kimliği belirtmelisiniz!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send(':x: `'+ args.join(' ') + '` için çekiliş bulunamadı.');
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('✅ Çekiliş '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' saniyeden daha kısa sürede sona erecek...');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
            message.channel.send('Bu çekiliş zaten sona erdi!');
        } else {
            console.error(e);
            message.channel.send(':x: Bir hata oluştu');
        }
    });

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0,
};

exports.help = {
  name: 'çekiliş-bitir',
  description: '',
  usage: 'davet'
};