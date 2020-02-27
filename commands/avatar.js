module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  category: 'fun',
	description: 'Shows user avatar',
	execute(client,message,args) {
        const Discord = require('discord.js')
            let avatar = message.author.avatarURL
            let avataremb = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(`[Click here to download](${avatar})`)
            .setImage(avatar)
            message.channel.send(avataremb)
        

	},
};
