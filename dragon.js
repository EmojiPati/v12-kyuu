const Discord = require("discord.js");
const db = require('quick.db');
const client = new Discord.Client();
require('discord-buttons')(client)
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const message = new Discord.Message();
const moment = require("moment");
var prefix = ayarlar.prefix;
require("./util/eventLoader")(client);



console.log("Akıyor!!")

require("./util/eventLoader")(client);





    const log = message => {
      console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
    };
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    fs.readdir("./komutlar/", (err, files) => {
       if (err) console.error(err);
       files.forEach(f => {
     fs.readdir(`./komutlar/${f}/`, (err, filess) => {
       if (err) console.error(err);
       log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
       filess.forEach(fs => {
         let props = require(`./komutlar/${f}/${fs}`);
         log(`${props.help.name} // Yüklendi`);
         client.commands.set(props.help.name, props);
         props.conf.aliases.forEach(alias => {
           client.aliases.set(alias, props.help.name);
         });
        });
       });
      });
     });
    





    client.elevation = message => {
      if (!message.guild) {
        return;
      }
      let permlvl = 0;
      if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
      if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
      if (message.author.id === ayarlar.sahip) permlvl = 4;
      return permlvl;
    };
    
client.login(process.env.TOKEN);

//-----------------------KOMUTLAR-----------------------\\

client.on('message', message => {
let sahip = ayarlar.sahip;

 if(message.content === 'sa') {
    console.log('nediyon la gevşek')
    message.channel.send('nediyon la gevşek');
 } 
});