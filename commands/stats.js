module.exports = {
    name: 'stats',
    category: 'owner',
	description: "Bot statuts",
	execute(client,message) {
  
    
    let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
hours %= 24;
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
    const user = message.author
 let h = 0;
client.guilds.forEach(g => {h = h + g.memberCount});
   
    const embed1 = new Discord.MessageEmbed()
    .setColor('#5147FF')
    .setAuthor('Bot stats: ')
    .addField('Uptime : ', `${days} days, ${hours} hours, ${minutes} minutes and ${Math.round(seconds)} seconds`)
    .addField('Guilds : ', `${client.guilds.size}`)
    .addField('Cached users : ', `${client.users.size}`)
    .addField('Total users :', h) 
    .addField('Bot version :', client.version)
    .addField('Number of commands : ', client.commands.size)
    .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL());
    
    message.channel.send(embed1)
  },
};
