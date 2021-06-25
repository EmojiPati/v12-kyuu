const Discord = require("discord.js")
const db = require('quick.db')
exports.run = async (client, message, args) => { 
 
          let komut = await db.fetch(`sunucuKomut_${message.guild.id}`)

                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!komut) await db.set(`sunucuKomut_${message.guild.id}`, '<:blurpleno:857917856041271336> Bulunmuyor.')
                  
                  
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`<:blurplechat:857907159269769236> Mevcut özel komutlar.`, `\`${komut}\``)
                     .setColor('0x36393E')
                        message.channel.send(welcomeEmbed)

  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["autoanswer-list"],
  permLevel: 0
}

exports.help = {
  name: 'otocevap-liste'
};
