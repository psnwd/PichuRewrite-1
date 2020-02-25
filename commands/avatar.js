module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  category: 'fun',
	description: 'Shows user avatar',
	execute(client,message,args) {
        const Discord = require('discord.js')

            let avataremb = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(message.author.avatarURL({format: 'jpg'}))
            message.channel.send(avataremb)
        

	},
};
