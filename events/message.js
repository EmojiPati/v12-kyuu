const ayarlar = require("../ayarlar.json");
const db = require('quick.db')
const Discord = require('discord.js')
module.exports = async message => {
  let client = message.client;
  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    
    if (db.get(`user_${message.author.id}.şartlar`) != 'kabul edilmiş') {
      const warningEmbed = new Discord.MessageEmbed()
      .setColor('0x36393E')
      .setDescription(`**Ops! Bu botu kullanabilmek için şartları onaylamanız gerekmektedir.**\n\n**📘** butonuna basarak botun kullanım şartlarına bakabilirsin.`)

      const termsOfService = new Discord.MessageEmbed()
      .setColor('0x36393E')
      .setDescription(`**
      1) Botun Kopyası Çıkarılmayacak
      2) Botun Evallerle Tokeni Alınmayacak
      3) Bot Kötü Şartlarla Kullanılmayacak
      **`)
      .setTitle(`${client.user.username} | Kullanım Şartları`);

      return message.channel.send(warningEmbed).then(async rifleman => {
        await rifleman.react('📘');
        await rifleman.awaitReactions((youth, anasia) => youth.emoji.name == '📘' && anasia.id == message.author.id, { max: 1 })
        .then(async () => {
          await rifleman.reactions.removeAll();
          await rifleman.edit(termsOfService).then(async leavemealone => {
            await leavemealone.react('✅');
            await leavemealone.awaitReactions((youth, anasia) => youth.emoji.name == '✅' && anasia.id == message.author.id, { max: 1 })
            .then(async () => {
              await leavemealone.reactions.removeAll();
              await rifleman.edit(termsOfService.setDescription('**Kullanım şartlarını kabul ettiniz. Artık botu kullanabilirsiniz!**'));
              await db.set(`user_${message.author.id}.şartlar`, 'kabul edilmiş');
            });
          });
        });
      })
    };
    
    
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};