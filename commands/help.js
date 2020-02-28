const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Shows the help',
    category: 'utility',
    execute(client,message,args) {
        
            const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Pichu\'s help!')
            .setDescription('Thx u for using Pichu! This bot is currently WiP and not finished, but here is a list of commands :')
            let misccommands = []
            let ownercommands = []
            let musiccommands=[] 
            let funcommands=[]
            let utilitycommands = []
            client.commands.forEach(command => {
                            if (!command.aliases) {
                            if (command.category === 'misc') misccommands.push(`\`${command.name}\``)
                            if (command.category === 'owner') ownercommands.push(`\`${command.name}\``)
                            if (command.category === 'music') musiccommands.push(`\`${command.name}\``)
                            if (command.category === 'fun') funcommands.push(`\`${command.name}\``)
                            if (command.category === 'utility') utilitycommands.push(`\`${command.name}\``)
                            } else {
                                if (command.category === 'misc') misccommands.push(`\`${command.name}(${command.aliases[0]})\``)
                                if (command.category === 'owner') ownercommands.push(`\`${command.name}(${command.aliases[0]})\``)
                                if (command.category === 'music') musiccommands.push(`\`${command.name}(${command.aliases[0]})\``)
                                if (command.category === 'utility') utilitycommands.push(`\`${command.name}(${command.aliases[0]})\``)
                                if (command.category === 'fun') funcommands.push(`\`${command.name}(${command.aliases[0]})\``)
                            } 
            })
        embed.addField('Misc commands :',misccommands.join(', '))
        embed.addField('Owner commands :',ownercommands.join(', '))
        embed.addField('Music commands :', musiccommands.join(', ')) 
        embed.addField('Fun commands :',funcommands.join(', '))
        embed.addField('Utility commands :', utilitycommands.join(' '))
            message.channel.send(embed)
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
