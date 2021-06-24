const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var degisenOynuyor = [
    
    `✔ » Aktif`,   //İSTEDİĞİNİZ KADAR YAPABİLİRSİNİZ SADECE SONRA , KOYMAYIN
    `🐉 » Botumuzu Davet Etmek için d!davet`,
    `🌐 » ${client.guilds.cache.size.toLocaleString()} İtopya | 🐲 » ${client.users.cache.size} Dragon'a Hizmet Veriyor`
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 2500);
  
  client.user.setStatus("dnd"); //dnd, idle, online, offline
  
}
