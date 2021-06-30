exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.roles.cache.some((r) => r.name === client.config.giveawayRole)){
        return message.channel.send(`:x: You need to have the ${client.config.giveawayRole} role to do that.`);
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Geçerli bir mesaj kimliği belirtmelisiniz!');
    }

    // If no field to edit is specifed
    if(!args[1]){
        return message.channel.send(':x: Ödülü veya kazananları düzenlemeniz gerekiyor!');
    }

    if(args[1] === 'ödül'){
        let newPrize = args.slice(2).join(' ')

        if(!newPrize) return message.channel.send(':x: Yeni bir ödül vermelisiniz!');

        client.giveawaysManager.edit(args[0], {
            newPrize: newPrize,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('✅ Çekiliş ödülü, ' + numberOfSecondsMax + ' saniyeden daha kısa sürede güncellenecektir..');
        }).catch((err) => {
            message.channel.send(`:x: No giveaway found for \`${args[0]}\`, please check you have the right message and try again.`);
        });
    }else
    if(args[1] === 'kazanan'){
        let newWinners = args[2]
        if(isNaN(newWinners) || (parseInt(newWinners) <= 0)){
            return message.channel.send(':x: Geçerli bir kazanan sayısı belirtmelisiniz!');
        }

        client.giveawaysManager.edit(args[0], {
            newWinnerCount: newWinners,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('✅ The giveaway winner count will updated in less than ' + numberOfSecondsMax + ' seconds.');
        }).catch((err) => {
            message.channel.send(`:x: No giveaway found for \`${args[0]}\`, please check you have the right message and try again.`);
        });
    }else{
        return message.channel.send(':x: You need to either edit the prize or the winners!');
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