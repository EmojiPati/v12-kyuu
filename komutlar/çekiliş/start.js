const zaman = require('zaman');

exports.run = async (client, message, args) => {
    let giveawayChannel = ''
    let giveawayDuration = ''
    let giveawayNumberWinners = ''
    let giveawayPrize = ''
    let status = ''

    // If the member doesn't have enough permissions
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<:blurplecross:857907152760078387> Bu komutu kullanma izniniz yok!`);


    // Giveaway channel
    async function part1(){
        await message.channel.send(`>>> ${client.config.giveawayEmoji} Lütfen çekilişin olması gereken kanalı belirtin.\nGiriş iptal etmek için \`iptal\`.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'iptal') {
                message.channel.send('**Komut İptal Edildi**')
                status = 1
                return
            }else{
                giveawayChannel = collected.first().mentions.channels.first()
            if(!giveawayChannel){
                message.reply('Hiçbir kanaldan bahsedilmedi\nLütfen komutu tekrar deneyin.')
                status = 1
            }}
        }).catch(() => {
            message.reply('30 dakika sonra olmazsa lütfen komutu tekrar deneyin.');
            status = 1
    })
    }

    // Giveaway duration
    async function part2(){
        await message.channel.send(`>>> ${client.config.giveawayEmoji} Çekiliş ne kadar sürmeli?\nİptal etmek için \`iptal\` girin.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'iptal') {
                message.channel.send('**Komut İptal Edildi**')
                status = 1
                return
            }else
            if(isNaN(zaman(collected.first().content.toLowerCase()))){
                message.channel.send('<:blurpleno:857917856041271336> Geçerli bir süre belirtmelisiniz!');
                status = 1
                return
            }else{
                giveawayDuration = collected.first().content
            }
        }).catch(() => {
            message.reply('30 dakika sonra olmazsa lütfen komutu tekrar deneyin.');
            status = 1
    })
    }

    // Number of winners
    async function part3(){
        await message.channel.send(`>>> ${client.config.giveawayEmoji} Kaç kazanan olmalı?\n**En fazla 10**\nİptal etmek için \`iptal\` girin.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'iptal') {
                message.channel.send('**Komut İptal Edildi**')
                status = 1
                return
            }else
            if(isNaN(collected.first().content.toLowerCase()) || (parseInt(collected.first().content.toLowerCase()) <= 0)){
                message.channel.send('<:blurpleno:857917856041271336> Geçerli bir kazanan sayısı belirtmelisiniz!');
                status = 1
                return
            }else 
            if(collected.first().content.toLowerCase() > 10){
                message.channel.send('<:blurpleno:857917856041271336> 10 dan az kazananınız olmalı!');
                status = 1
                return
            }else{
                giveawayNumberWinners = collected.first().content
            }
        }).catch(() => {
            message.reply('30 dakika sonra olmazsa lütfen komutu tekrar deneyin.');
            status = 1
    })
    }

    // Giveaway prize
    async function part4(){
        await message.channel.send(`>>> ${client.config.giveawayEmoji} Çekiliş ödülü ne olmalı?\nİptal etmek için \`iptal\` girin.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'iptal') {
                message.channel.send('**Komut İptal Edildi**')
                status = 1
                return
            }else{
                giveawayPrize = collected.first().content
            }
        }).catch(() => {
            message.reply('30 dakika sonra olmazsa lütfen komutu tekrar deneyin.');
            status = 1
    })
    }

    // Start the giveaway
    async function part5(){
        client.giveawaysManager.start(giveawayChannel, {
            // The giveaway duration
            time: zaman(giveawayDuration),
            // The giveaway prize
            prize: giveawayPrize,
            // The giveaway winner count
            winnerCount: parseInt(giveawayNumberWinners),
            // Who hosts this giveaway
            hostedBy: client.config.hostedBy ? message.author : null,
            // Messages
            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+ client.config.giveawayEmoji + " **ÇEKİLİŞ** " + client.config.giveawayEmoji,
                giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+ client.config.giveawayEmoji + "** ÇEKİLİŞ BİTTİ **" + client.config.giveawayEmoji,
                timeRemaining: "Kalan Süre: **{duration}**!",
                inviteToParticipate: "Katılmak İçin " + client.config.reaction + " Emojisine Tıkla!",
                winMessage: client.config.giveawayEmoji + " {winners} **{prize}** kazandın!",
                embedFooter: client.config.botName,
                noWinner: "Çekiliş iptal edildi, geçerli katılım yok.",
                hostedBy: "Çekilişi Yapan: {user}",
                winners: "kazanan(lar)",
                endedAt: "Şu tarihte sona erdi:",
                units: {
                    saniye: "saniye",
                    dakika: "dakika",
                    saat: "saat",
                    gün: "gün",
                    pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
                }
            }
        });

        message.channel.send(`${client.config.giveawayEmoji} Çekilişi <#${giveawayChannel.id}> içinde başladı`);
    }

    async function main(){
        await part1()
        if(status) return
        await part2()
        if(status) return
        await part3()
        if(status) return
        await part4()
        if(status) return
        await part5()
        }

        main()

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