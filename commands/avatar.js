module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  category: 'fun',
	description: 'Shows user avatar',
	execute(client,message,args) {
let user = message.author || client.users.get(args.join(' ')) || message.mentions.users.first()

        const Discord = require('discord.js')
            let avatar = user.avatarURL
            let avataremb = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(`[Click here to download](${avatar})`)
            .setImage(avatar)
            message.channel.send(avataremb)
        

	},
};
