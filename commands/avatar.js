module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  category: 'utility',
	description: 'Shows user avatar',
	async execute(client,message,args) {
    let user = message.mentions.users.first() || message.guild.members.cache.find(member => member.user.id === args.join(' '))|| message.guild.members.cache.find(member => member.nickname.toLowerCase() === args.join(' ').toLowerCase() || member.user.username.toLowerCase() === args.join(' ').toLowerCase()) || message.author;
 
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
