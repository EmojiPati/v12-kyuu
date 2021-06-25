const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const db = require('quick.db')
   exports.run = async (client, message, args) => { 

if(message.author.id !== message.guild.owner.id) return message.channel.send('<:blurplecross:857907152760078387> Bu komutu sadece sunucu sahibi kullanabilir!');

await message.guild.channels.cache.forEach(a => a.delete());
await message.guild.channels.create('Önemli Kanallar', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
});
await message.guild.channels.create("Duyurular", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id,})
await message.guild.channels.create("Kurallar", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("Çekilişler", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})

await message.guild.channels.create('Sohbet Kanalları', { type: "category" })
await message.guild.channels.create("Chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("Bot Komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("Sosyal Medya Paylaşım", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})

await message.guild.channels.create('Ses Kanalları | Oyun', { type: "category" })
await message.guild.channels.create("Oyun", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları | Oyun').id})
await message.guild.channels.create("Oyun", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları | Oyun').id})
await message.guild.channels.create("Oyun", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları | Oyun').id})

await message.guild.channels.create('Ses Kanalları', { type: "category" })
await message.guild.channels.create("Ses", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları').id})
await message.guild.channels.create("Müzik", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları').id})
await message.guild.channels.create("Ara Bulma", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Ses Kanalları').id})

await message.guild.channels.cache.find(a => a.name === "chat").send('<:blurpleyes:857917858025439242> <@'+message.author.id+"> sunucu kuruldu!")

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["setup-server"],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur'
};