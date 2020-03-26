module.exports = {
name: 'serverlist',
usage: 'pichu serverlist',
description: 'Serverlist',
category: 'owner',
async execute(client,message) {
 let string = '';
client.guilds.cache.forEach(guild => {
    string += guild.name + '\n';})
    
    
    message.author.send(string)
    message.channel.send('Server list sent in dm!');
   },
} 
