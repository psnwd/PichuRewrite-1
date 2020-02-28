module.exports = {
	name: 'userinfo',
  category: 'utility',
  aliases: ['ui'],
	description: 'Shows user info',
	execute(client,message) {
        const Discord = require('discord.js')
        let server = message.mentions.users.first() || client.users.get(args.join(' ')) || message.author;
        let isabot = ''
        if (user.bot) {isabot = 'Yes'} else {isabot = 'No'}
        let e = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor('User info :')
        .addField('Name :', user.username)
        .addField('Discriminator (tag) :', user.discriminator)
        .addField('Avatar URL :', user.avatarURL)
        .addField('Is user a bot?', isabot)
        .addField('Was created at :', user.createdAt)
        .addField('Default Avatar URL :', user.defaultAvatarURL)
        .addField('User id :', user.id)
        .addField('Last message ID :', user.lastMessageID)
        .addField('User presence :', user.presence)
        .addField('Time to tag him!', user.tag)
        message.channel.send(e)
	},
};
