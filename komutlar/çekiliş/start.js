const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send('<:blurplecross:857907152760078387> Çekilişi başlatmak için mesajları yönetme izinlerine sahip olmanız gerekir.');
    }

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send('<:blurplecross:857907152760078387> Geçerli bir kanaldan bahsetmelisin!');
    }

    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send('<:blurplecross:857907152760078387> Geçerli bir süre belirtmelisiniz!');
    }

    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send('<:blurplecross:857907152760078387> Geçerli bir kazanan sayısı belirtmelisiniz!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(3).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send('<:blurplecross:857907152760078387> Geçerli bir ödül belirtmelisiniz!');
    }

    // Start the giveaway
    client.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: parseInt(giveawayNumberWinners),
        // Who hosts this giveaway
        hostedBy: client.config.hostedBy ? message.author : null,
        // Messages
        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+"<:tada:859401334523559956><:tada:859401334523559956> **ÇEKİLİŞ** <:tada:859401334523559956><:tada:859401334523559956>",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+"<:tada:859401334523559956><:tada:859401334523559956> **ÇEKİLİŞ BİTTİ** 🎉<:tada:859401334523559956><:tada:859401334523559956>",
              timeRemaining: "Kalan Süre: **{duration}**!",
            inviteToParticipate: "Katılmak İçin 🎉 Emojisine Tıkla",
            winMessage: "Tebrikler, {winners}! **{prize}** Kazandınız!",
            embedFooter: "Çekiliş",
            noWinner: "Çekiliş İptal Edildi, katılım yok.",
            hostedBy: "Çekilişi Yapan: {user}",
            winners: "winner(s)",
            endedAt: "Ended at",
            units: {
                seconds: "saniye",
                minutes: "dakika",
                hours: "saat",
                days: "gün",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`Giveaway started in ${giveawayChannel}!`);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekiliş-start"],
  permLevel: 0,
};

exports.help = {
  name: 'çekiliş-başlat',
  description: '',
  usage: 'davet'
};