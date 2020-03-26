const Discord = require('discord.js')

module.exports = {
    name: 'emojiinfo',
    aliases: ['ei'],
    category: 'utility',
    usage: 'pichu emojiinfo <emojiname>',
    decription: 'Shows emoji info',
    async execute(client,message,args) {
        if (!args) return message.channel.send('Please provide a emoji name')
        let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args.join(' '))
        if (!emoji) return message.channel.send('Emoji not found!')
        let emojilink = `https://cdn.discordapp.com/emojis/${emoji.id}.png?v=1`
        if (emoji.animated) emojilink = `https://cdn.discordapp.com/emojis/${emoji.id}.gif?v=1`
        message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emoji info')
        .setThumbnail(emojilink)
        .setDescription(`Name: **${emoji.name}**\nAnimated: **${emoji.animated}**\nID: **${emoji.id}**\nLink: ${emojilink}`))
    }
}