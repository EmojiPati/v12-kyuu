const talkedRecently = new Set();
const discord = require('discord.js');
exports.run = async(client, message, args) => {
  
  
  if (talkedRecently.has(message.author.id)) {
        message.channel.send("Yavaş Ol Bakalım, Sunucu tanıt komutunu 12 saatde 1 kullanabilirsin!");
} else {
message.channel.createInvite({maxAge: 0}).then((invite) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Birisi Sunucu Tanıttı!')
    .setThumbnail(message.guild.iconURL())
    .setDescription(`[Sunucuya gelmek için tıkla!](https://discord.com/8KmvJrdnDZ) \n \n Sunucudaki Üye Sayısı: **${message.guild.memberCount}** \n\n Tanıtılan Sunucu Adı:  **${message.guild.name}** \n\n Sunucu Tanıtan: **<@${message.author.id}>**`)
    client.channels.cache.get("857559745821278210").send(embed)
    return message.channel.send('Sunucun tanıtıldı✅ ')
    talkedRecently.add(message.author.id);
    setTimeout(() => {
     
      talkedRecently.delete(message.author.id);
    }, 8640000); 

})}};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucutanıt"],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-tanıt'
};