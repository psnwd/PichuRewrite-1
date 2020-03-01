module.exports = {
    name: 'stats',
    category: 'misc',
	description: "Bot statuts",
	async execute(client,message) {
  const Discord = require('discord.js')
    
    let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
hours %= 24;
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
    const user = message.author
 let h = 0;
client.guilds.cache.forEach(g => {h = h + g.memberCount});
let playingmusic = message.client.queue.size
if (!playingmusic) playingmusic = 0
   
    const embed1 = new Discord.MessageEmbed()
    .setColor('#5147FF')
    .setAuthor('Bot stats: ')
    .addField('Uptime : ', `${days} days, ${hours} hours, ${minutes} minutes and ${Math.round(seconds)} seconds`)
    .addField('Guilds : ', `${client.guilds.cache.size}`)
    .addField('Bot version : ', `${client.version}`)
    .addField('Total users :', h) 
    .addField('Number of servers playing music thx to me :', playingmusic)
    .addField('Number of commands : ', client.commands.size)
    .setTimestamp()
        .setFooter('Made by Lumap#0149')
    
    message.channel.send(embed1)
  },
};
