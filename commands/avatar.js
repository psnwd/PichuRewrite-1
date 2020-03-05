module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  category: 'utility',
  usage: 'pichu avatar @mention/username/user-id/you',
	description: 'Shows user avatar',
	async execute(client,message,args) {
let user = client.users.cache.get(args.join(' ')) || message.mentions.users.first() || client.users.cache.find(user => user.username.toLowerCase() === args.join(' ').toLowerCase()) || message.author 

        const Discord = require('discord.js')
            let avatar = user.avatarURL({format: 'png', dynamic: true, size: 2048})
            let avataremb = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`[Click here to download](${avatar})`)
            .setImage(avatar)
            .setFooter('Made by Lumap#0149')
            message.channel.send(avataremb)
        

	},
};
