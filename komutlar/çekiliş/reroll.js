const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send('<:blurplecross:857907152760078387> Çekilişi yeniden düzenlemek için iletileri yönetme izinlerine sahip olmanız gerekir.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send('<:blurplecross:857907152760078387> Geçerli bir mesaj kimliği belirtmelisiniz!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('<:blurplecross:857907152760078387> `'+ args.join(' ') +'` için bir çekiliş bulunamadı.');
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // Success message
        message.channel.send('<:blurpleyes:857917858025439242> Çekiliş yeniden seçildi!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('<:blurplecross:857907152760078387> Çekiliş Bitmedi!');
        } else {
            console.error(e);
            message.channel.send('<:blurplecross:857907152760078387> Bi Hata Oluştu...');
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