module.exports = {
    name: 'slap',
    category: 'fun',
    usage: 'pichu slap [@mention/username/user-id] ',
    description: 'slaps someone',
    async execute(client,message,args,dbl,queue) {
       
        message.channel.send('Generating...').then(async msg => {
            let user = message.mentions.users.first() || client.users.cache.get(args.join(' ')) || client.users.cache.find(user => user.username.toLowerCase() === args.join(' ').toLowerCase()) || client.user
            const nekoclient = require('nekos.life')
            const neko = new nekoclient()
            const slap = await neko.sfw.slap()
            const Discord = require('discord.js')
            msg.edit(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**${message.author.username}** slaps **${user.username}**`)
            .setImage(slap.url))
        })
    }
}