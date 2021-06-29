const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Beautify = require('beautify');
const config = require('../../ayarlar.json');

exports.run = async (client, message, args) => {
  if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
  
  if (message.author.id !== "852596827713962066") {
    return message.channel.send("<:blurpleno:857917856041271336> Yasak: Bu Komut Yalnızca Sahibine Özeldir!")
  }
  
  if (!args[0]) {
    message.channel.send("_**BİR ŞEY**_ Lütfen değerlendirmeniz gerekiyor!")
  }
  
  try {
    if (args.join(" ").toLowerCase().includes("token")) {
      return;
    }
    
    const toEval = args.join(" ");
    const evaluated = eval(toEval);
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Eval")
    .addField("ToEvaluate", `\`\`\`js\n${Beautify(args.join(" "), { format: "js" })}\n\`\`\``)
    .addField("Evaluated", evaluated)
    .addField("Type of:", typeof(evaluated))
    .setTimestamp()
    .setFooter(`${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(embed);
    
  } catch (e) {
    let errorembed = new Discord.MessageEmbed()
    .addField("\<:blurpleno:857917856041271336> Error!")
    .setDescription(e)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(errorembed);
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eval"],
  permLevel: 0,
};

exports.help = {
  name: 'eval',
  description: '',
  usage: 'davet'
};