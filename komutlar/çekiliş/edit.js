exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.roles.cache.some((r) => r.name === client.config.giveawayRole)){
        return message.channel.send(`<:blurpleno:857917856041271336> You need to have the ${client.config.giveawayRole} role to do that.`);
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send('<:blurpleno:857917856041271336> Geçerli bir mesaj kimliği belirtmelisiniz!');
    }

    // If no field to edit is specifed
    if(!args[1]){
        return message.channel.send('<:blurpleno:857917856041271336> Ödülü veya kazananları düzenlemeniz gerekiyor!');
    }

    if(args[1] === 'ödül'){
        let newPrize = args.slice(2).join(' ')

        if(!newPrize) return message.channel.send('<:blurpleno:857917856041271336> Yeni bir ödül vermelisiniz!');

        client.giveawaysManager.edit(args[0], {
            newPrize: newPrize,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('<:blurpleyes:857917858025439242> Çekiliş ödülü, ' + numberOfSecondsMax + ' saniyeden daha kısa sürede güncellenecektir..');
        }).catch((err) => {
            message.channel.send(`<:blurpleno:857917856041271336> No giveaway found for \`${args[0]}\`, please check you have the right message and try again.`);
        });
    }else
    if(args[1] === 'kazanan'){
        let newWinners = args[2]
        if(isNaN(newWinners) || (parseInt(newWinners) <= 0)){
            return message.channel.send('<:blurpleno:857917856041271336> Geçerli bir kazanan sayısı belirtmelisiniz!');
        }

        client.giveawaysManager.edit(args[0], {
            newWinnerCount: newWinners,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('<:blurpleyes:857917858025439242> Çekiliş kazanan sayısı ' + numberOfSecondsMax + ' saniyeden daha kısa sürede güncellenecektir.');
        }).catch((err) => {
            message.channel.send(`<:blurpleno:857917856041271336> No giveaway found for \`${args[0]}\`, please check you have the right message and try again.`);
        });
    }else{
        return message.channel.send('<:blurpleno:857917856041271336> Ödülü veya kazananları düzenlemeniz gerekiyor!');
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekiliş-edit"],
  permLevel: 0,
};

exports.help = {
  name: 'çekiliş-edit',
  description: '',
  usage: 'davet'
};