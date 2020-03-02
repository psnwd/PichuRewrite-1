module.exports = {
	name: 'userinfo',
  category: 'utility',
  aliases: ['ui'],
	description: 'Shows user info',
	async execute(client,message,args) {
        const Discord = require('discord.js')
        let user = message.mentions.users.first() || message.guild.members.cache.find(member => member.user.id === args.join(' ')) || message.guild.members.cache.find(member => member.nickname.toLowerCase() === args.join(' ').toLowerCase() || member.user.username.toLowerCase() === args.join(' ').toLowerCase()) || message.author;
        let isabot = ''
        if (user.bot) {isabot = 'Yes'} else {isabot = 'No'}
        let e = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('User info :')
        .setThumbnail(user.avatarURL({format: 'png', dynamic: true, size: 2048}))
        .addFields(
          {name: 'Name :', value: user.username, inline: true},
          {name: 'Discrimintor :', value: user.discriminator, inline: true},
          {name: 'Avatar URL :', value: user.avatarURL({format: 'png', dynamic: true, size: 2048}), inline: true},
          {name: 'Is a bot ?', value: isabot, inline: true},
          {name: 'Account creation date :', value: user.createdAt, inline: true},
          {name: 'Default avatar URL :', value: user.defaultAvatarURL, inline: true},
          {name: 'ID :', value: user.id, inline: true},
          {name: 'Last message ID :', value: user.lastMessageID, inline: true}
        )
        .setFooter('Made by Lumap#0149')
        message.channel.send(e)
	},
};
