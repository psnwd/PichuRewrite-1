const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'lyrics',
    usage: 'pichu lyrics <song name> OR pichu lyrics if a song is currently playing',
    description: 'Shows lyrics of a song',
    category: 'music',
    async execute(client,message,args,dbl,queue) {
        if (!args.join(' ') && !queue.get(message.guild.id)) return message.channel.send('Please proide a song name')
        const solenolyrics= require("solenolyrics"); 
        const Discord = require('discord.js')
    var lyrics = await solenolyrics.requestLyricsFor(args.join(' ')); 
    var title = await solenolyrics.requestTitleFor(args.join(' ')); 
    var author = await solenolyrics.requestAuthorFor(args.join(' ')); 
    if (!lyrics) return message.channel.send('Lyrics not found!')
    if (lyrics.length>2000) return client.commands.get('hastebin').execute(client,message,lyrics.split(' '));
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Lyrics for ${title} by ${author}`)
    .setDescription(lyrics)
    .setFooter('Made by Lumap#0149'))

    }
}