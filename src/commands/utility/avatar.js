module.exports = {
  name: 'avatar',
  aliases: ['pfp', 'av'],
  category: 'utility',
  usage: 'pichu avatar [@mention/username/user-id]',
	description: 'Shows user avatar',
	async execute(client,message,args) {
        let member = client.functions.get('findByID').execute(message.guild,args.join(' ')) || message.mentions.members.first() || client.functions.get('findByUsername').execute(message.guild,args.join(' ')) || message.member
   
        const Discord = require('discord.js')
            let avatar = member.user.avatarURL({format: 'png', dynamic: true, size: 2048})
            let avataremb = new Discord.MessageEmbed()
            .setAuthor(client.user.tag, client.user.avatarURL({format: 'png', dynamic: true, size: 2048}))
            .setColor('RANDOM')
            .setDescription(`[Click here to download](${avatar})`)
            .setImage(avatar)
            .setFooter('Made by Lumap#0149')
        message.channel.send(avataremb)
        

	},
};
