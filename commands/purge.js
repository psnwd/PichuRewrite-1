const Discord = require('discord.js')
module.exports = {
    name: 'purge',
    usage: 'pichu purge <amount>',
    description: 'purge an amount of messages from the channel',
    category: 'moderation',
    async execute(client, message, args) {
        if (!args.join(' ')) return message.channel.send('I can\'t purge nothing!')
        //perm check 
        if (!message.member.permissions.toArray().includes("MANAGE_MESSAGES")) return message.channel.send("You need the Manage Messages permisson to purge messages!")
        let amount = args[0]
        if (isNaN(amount)) return message.channel.send("You need to tell me a number of messages I should purge!")
        amount = Number(amount)
        if (!amount || amount < 2 || amount > 100) return message.channel.send('Invalid number! Please provide a number between 1 and 99')
        let messages = message.channel.messages.fetch(amount)
        message.channel.bulkDelete(messages)
        message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle("Purge succesfull").setDescription(`**${amount}** Messages have been purged :white_check_mark:`).setFooter('Made by Lumap#0149 and Link#4444'))
    }, 
}
