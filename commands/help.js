const Discord = require('discord.js')
module.exports = {
    name: 'help',
    usage: 'pichu help',
    description: 'Shows the help',
    category: 'utility',
    async execute(client,message,args,dbl,queue) {
        if (!args.join(' ')) {
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pichu\'s help!')
            .setDescription('Hint : To know command informations, do `pichu help <command>`')
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
        } else {
            command = client.commands.get(args.join(' '))
            if (!command) return message.channel.send('This command doesn\'t exist!')
            let aliases = 'No aliases'
            if (command.aliases) aliases = command.aliases.join(', ')
            message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**${command.name}** help :`)
            .addFields(
                {name: 'Command name :', value: command.name, inline: true},
                {name: 'Command alias(es) :', value: aliases, inline: true},
                {name: 'Command category :', value: command.category, inline: true},
                {name: 'Command description :', value: command.description, inline: true},
                {name: 'Command usage :', value: command.usage, inline: true}
            
            )
            )
        }

    },
};
