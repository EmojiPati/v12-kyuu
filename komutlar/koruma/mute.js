const Discord = require("discord.js");
const ayar = require("../../ayarlar.json");
const db = require("quick.db")
const moment = require("moment");
const ms = require("ms");
const embed = new Discord.MessageEmbed();
let { attention, muteli, igne, yes2,  no , mention, staff, search, saat, compass, plus, mutesiz } = require('../../emoji.json')
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${attention} **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
let prefix = ayar.prefix
if (db.has(`mutelirol.${message.guild.id}`) === false) return message.channel.send(`${igne}   **Muteli Rolü Ayarlanmamış Ayarlamak İçin** | ${prefix}mute-rol #rol`);
  let mutelirol = message.guild.roles.cache.get(db.fetch(`mutelirol.${message.guild.id}`).replace("<@", "").replace(">", ""));
if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`${igne}   **Mod Log Kanalı Ayarlanmamış Ayarlamak İçin** | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let user = message.guild.member(member)
    let reason = args.splice(2).join(" ") || "Sebep belirtilmedi."
    if (!user) return message.channel.send(embed.setDescription(`${attention} ${message.author}, Eksik arguman kullandınız, \`${prefix} mute @etiket/ID 1sn Küfür\``)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))
    if (!args[1]) return message.channel.send(embed.setDescription(`${attention} ${message.author}, Eksik arguman kullandınız, \`${prefix} mute @etiket/ID 1sn Küfür\``)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 7000 }))
    let sure = args[1]
        .replace("sn", " Saniye")
        .replace("d", " Dakika")
        .replace("s", " Saat")
        .replace("g", " Gün")


    if (user.id === client.user.id) return message.react(no)
    if (user.roles.highest.position >= message.member.roles.highest.position) return message.react(no)
    if (user.id === message.author.id) return message.react(no)

    let atilanAy = moment(Date.now()).format("MM");
    let atilanSaat = moment(Date.now()).format("HH:mm:ss");
    let atilanGün = moment(Date.now()).format("DD");
    let bitişAy = moment(Date.now() + ms(args[1])).format("MM");
    let bitişSaat = moment(Date.now() + ms(args[1])).format("HH:mm:ss");
    let bitişGün = moment(Date.now() + ms(args[1])).format("DD");
    let muteAtılma = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanSaat}`;
    let muteBitiş = `${bitişGün} ${bitişAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${bitişSaat}`;
    let cezaID = db.get(`cezaid.${message.guild.id}`) + 1
    let puan = await db.fetch(`cezapuan.${user.id}`) || "0"
    let durum = await db.get(`durum.${user.id}.mute`)
    if (durum) return message.channel.send(embed.setDescription(`${attention} ${user} Adlı kullanıcının aktif bir **CHAT-MUTE** cezası bulunmakta.`))

    user.roles.add(ayar.muteRol)
    message.react(yes2)
    message.channel.send(embed.setFooter(`${mention} Üyenin ceza puanı: ${puan}`).setDescription(`${yes2} ${user} Adlı kullanıcı ${message.author} tarafından \`${reason}\` sebebiyle  \`${sure}\` boyunca metin kanallarında susturuldu. Ceza ID: \`#${cezaID}\``)).then(x => x.delete({ timeout: 7000 }) && message.delete({ timeout: 6999 }))

    db.add(`cezaid.${message.guild.id}`, +1)
    db.add(`muteler.${message.author.id}`, 1)
    db.add(`cezapuan.${user.id}`, 5)
    db.push(`sicil.${user.id}`, { userID: user.id, adminID: message.author.id, Tip: "MUTE", start: muteAtılma, cezaID: cezaID })
    db.set(`durum.${user.id}.mute`, true)



    client.channels.cache.get(ayar.muteLog).send(embed.setDescription(`
   ${muteli} ${user} Adlı kullanıcı metin kanallarında susturuldu.
    
    \`${staff}\` Yetkili: ${message.author} (\`${message.author.id}\`)
    \`${saat}\` Süre: \`${sure}\`
    \`${search}\` Sebep: \`${reason}\`
    \`${compass}\` Tarih: \`${muteAtılma}\`
    \`${plus}\` Bitiş: \`${muteBitiş}\``))
    setTimeout(async() => {
        let data = await db.get(`durum.${user.id}.mute`)
        if (!data) return;
        if (!user.roles.cache.has(ayar.muteRol)) return;
        user.roles.remove(ayar.muteRol)
        let log = client.channels.cache.get(ayar.muteLog)
        if (log) log.send(embed.setDescription(`${mutesiz} ${user} Adlı kullanıcının metin kanallarındaki susturulması bitti.`))
        db.delete(`durum.${user.id}.mute`)
    }, ms(args[1]))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: 0
}

exports.help = {
  name: 'sustur'
};