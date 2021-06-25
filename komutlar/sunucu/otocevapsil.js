const Discord = require("discord.js")
const db = require('quick.db')
  const fynx = require("../../ayarlar.json");
exports.run = async (client, message, args) => { 

    
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix                
         var user = message.mentions.users.first() || message.author;
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:blurplecross:857907152760078387>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
                
                    
                   let komut = await db.fetch(`sunucuKomut_${message.guild.id}`) 
                	 let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                	 if(!komut) return message.channel.send('<:blurpleno:857917856041271336> Bu sunucuda özel komut ayarlı değil.')
                	 	let komutvarmi = await db.fetch(`sunucuKomut_${message.guild.id}`)
                	if(!args[0]) return message.channel.send(`<:blurpleno:857917856041271336> Lütfen silmek istediğiniz özel komudu giriniz.\nMevcut özel komutlar: \`${komut}\``)
                	if(args[0] !== komut) return message.channel.send(`<:blurpleno:857917856041271336> Bu komut mevcut değil.\nMevcut özel komutlar: \`${komut}\``)
                   if(args[0] == '<:blurpleno:857917856041271336> Bulunmuyor.') return message.channel.send(`<:blurpleno:857917856041271336> Bu komut mevcut değil.\nMevcut özel komutlar: \`${komut}\``)
                    
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`<:blurpleyes:857917858025439242> Bu sunucudan özel komut silindi.`, `\`${komut}\` silindi.`)
                     .setColor('0x36393E')
                
                     db.set(`sunucuKomut_${message.guild.id}`, '<:blurpleno:857917856041271336> Bulunmuyor.')
                     db.delete(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) 
          
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["delete-autoanswer"],
  permLevel: 0
}

exports.help = {
  name: 'otocevap-sil'
};