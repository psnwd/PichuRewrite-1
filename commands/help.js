const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Shows the help',
    category: 'utility',
    async execute(client,message,args) {
        
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pichu\'s help!')
            let misccommands = ''
            let ownercommands = ''
            let musiccommands=''
            let funcommands=''
            let utilitycommands = ''
            client.commands.forEach(command => {
                            if (!command.aliases) {
                            if (command.category === 'misc') misccommands+=`\`${command.name}\``
                            if (command.category === 'owner') ownercommands+=`\`${command.name}\``
                            if (command.category === 'music') musiccommands+=`\`${command.name}\``
                            if (command.category === 'fun') funcommands+=`\`${command.name}\``
                            if (command.category === 'utility') utilitycommands+=`\`${command.name}\``
                            } else {
                                if (command.category === 'misc') misccommands+=`\`${command.name}(${command.aliases[0]})\``
                                if (command.category === 'owner') ownercommands+=`\`${command.name}(${command.aliases[0]})\``
                                if (command.category === 'music') musiccommands+=`\`${command.name}(${command.aliases[0]})\``
                                if (command.category === 'utility') utilitycommands+=`\`${command.name}(${command.aliases[0]})\``
                                if (command.category === 'fun') funcommands+=`\`${command.name}(${command.aliases[0]})\``
                            } 
            })
        embed.addFields(
            {name: 'Misc commands :', value: misccommands},
            {name: 'Owner commands :', value: ownercommands},
            {name: 'Music commands :', value: musiccommands},
            {name: 'Fun commands :',value: funcommands},
            {name: 'Utility commands :', value: utilitycommands}
            )

            message.channel.send(embed)

    },
};
