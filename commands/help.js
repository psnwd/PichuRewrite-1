const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Shows the help',
    category: 'misc',
    execute(client,message,args) {
        
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pichu\'s help!')
            
//    
//list=[]
//client.commands.forEach(command => {
//    list.push('Name : '+command.name+', Description : '+command.description+', Category : '+command.category)
//});
//
//list.join(`\n`)
//message.channel.send(list)
//
    },
};
