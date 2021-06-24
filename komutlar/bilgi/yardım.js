const Discord = require('discord.js')

const ayarlar = require('../../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()

.setColor('RANDOM')
  .setTitle('Murat-Eren Yardım Menüsü')

  .setDescription(`

==============================================
:white_small_square: | **!test:** = botun çalıştığınız yada çalışmadığı söyler
:white_small_square: | **!oylama:** = oyalma yaprsınız
:white_small_square: | **!yaz:** = istediğiniz yazıyı yazar
:white_small_square: | **!türk:** = türk gif atar
:white_small_square: | **!toplamkomut:** = toplam komutu gösterir
:white_small_square: | **!ping:** = botun pingini gösterir
:white_small_square: | **!yazan-kazanır:** = verilen cümleyi ilk yazan kazanır
:white_small_square: | **!nuke:** = yazılan kanala silip yeniden aynı şekilde kurur
:white_small_square: | **!kick:** = etiketlediğiniz kişiyi sunucudan atar
:white_small_square: | **!kapaklaflar:** = rastgele kapak laf söyler
:white_small_square: | **!inek:** = inek gif atar
:white_small_square: | **!espri:** = espri yapar
:white_small_square: | **!ban:** = etiketlediğiniz kişiyi banlar
:white_small_square: | **!ara155:** = polis gelir
:white_small_square: | **!alkış:** = sizi alkışlar
:white_small_square: | **!türk:** = türk gif atar
:white_small_square: | **!a101:** = :D
:white_small_square: | **!yavaşmod:** = belittiğiniz sayıda kanalı yavaşlatır
===============================================

Bağlantılar 
**» Davet Linki** [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=832200119133667360&permissions=8&scope=bot)
`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["help"]

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}