const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Shows the help',
    category: 'misc',
    execute(client,message,args) {
        
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pichu\'s help!')
            .setDescription('Thx u for using PichuRewrite! This bot is currently WiP and not finished, but here is a list of commands :')
            let misccommands = []
            let ownercommands = []
            client.commands.forEach(command => {
                            if (command.category === 'misc') misccommands.push(`\`${command.name}\``)
                            if (command.category === 'owner') ownercommands.push(`\`${command.name}\``)
            })
        embed.addField('Misc commands :',misccommands.join(', '))
        embed.addField('Owner commands :',ownercommands.join(', '))
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
