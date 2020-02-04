module.exports = {
    name: 'help',
    description: 'Shows the help',
    category: 'misc',
    execute(client,message,args) {
const Discord = require('discord.js')
list=[]
client.commands.forEach(command => {
    list.push('Name : '+command.name+', Description : '+command.description+', Category : '+command.category)
});

list.join(`\n`)
message.channel.send(list)
    },
};
