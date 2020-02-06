module.exports = {
name: 'serverlist',
description: 'Serverlist',
category: 'owner',
execute(client,message) {
 let string = '';
client.guilds.forEach(guild => {
    string += guild.name + '\n';})
    
    
    message.author.send(string)
    message.channel.send('Server list sent in dm!');
   },
} 
