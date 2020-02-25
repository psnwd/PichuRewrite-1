module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  category: 'fun',
	description: 'Shows user avatar',
	execute(client,message,args) {
        const Discord = require('discord.js')
            let avatar = message.author.avatarURL({format: 'png',size: 2048})
            let avataremb = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`[Click here to download](${avatar})`)
            .setImage(avatar)
            message.channel.send(avataremb)
        

	},
};
