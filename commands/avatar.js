module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  category: 'fun',
	description: 'Shows user avatar',
	execute(client,message,args) {
        const Discord = require('discord.js')

            let avataremb = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`[Click here to download](${message.author.avatarURL({format: 'jpg',size: '2048'})})`)
            .setImage(message.author.avatarURL({format: 'jpg',size: '2048'}))
            message.channel.send(avataremb)
        

	},
};
