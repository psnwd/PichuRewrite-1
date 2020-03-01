const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Shows the help',
    category: 'utility',
    async execute(client,message,args) {
        
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pichu\'s help!')
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
        embed.addFields(
            {name: 'Misc commands :', value: misccommands.join(', ')},
            {name: 'Owner commands :', value: ownercommands.join(', ')},
            {name: 'Music commands :', value: musiccommands.join(', ')},
            {name: 'Fun commands :',value: funcommands.join(', ')},
            {name: 'Utility commands :', value: utilitycommands.join(', ')}
            )

            message.channel.send(embed)

    },
};
