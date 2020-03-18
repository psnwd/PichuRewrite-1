module.exports = {
    name: 'cuddle',
    category: 'fun',
    usage: 'pichu cuddle [@mention/username/user-id] ',
    description: 'Cuddles someone',
    async execute(client,message,args,dbl,queue) {
       
        message.channel.send('Generating...').then(async msg => {
            let user = message.mentions.users.first() || client.users.cache.get(args.join(' ')) || client.users.cache.find(user => user.username.toLowerCase() === args.join(' ').toLowerCase()) || client.user
            const nekoclient = require('nekos.life')
            const neko = new nekoclient()
            const cuddle = await neko.sfw.cuddle()
            const Discord = require('discord.js')
            msg.edit(new Discord.MessageEmbed()
            .setAuthor(client.user.tag, client.user.avatarURL({format: 'png', dynamic: true, size: 2048}))
            .setColor('RANDOM')
            .setDescription(`**${message.author.username}** cuddles **${user.username}**`)
            .setImage(cuddle.url))
        })
    }
}
