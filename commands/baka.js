module.exports = {
    name: 'baka',
    category: 'fun',
    usage: 'pichu baka [@mention/username/user-id] ',
    description: 'Bakas someone',
    async execute(client,message,args,dbl,queue) {
       
        message.channel.send('Generating...').then(async msg => {
            let user = message.mentions.users.first() || client.users.cache.get(args.join(' ')) || client.users.cache.find(user => user.username.toLowerCase() === args.join(' ').toLowerCase()) || client.user
            const nekoclient = require('nekos.life')
            const neko = new nekoclient()
            const baka = await neko.sfw.baka()
            const Discord = require('discord.js')
            msg.edit(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**${message.author.username}** bakas **${user.username}**`)
            .setImage(baka.url))
        })
    }
}