module.exports = {
	name: 'serverinfo',
  category: 'utility',
  aliases: ['si'],
	description: 'Shows server info',
	async execute(client,message) {
        const Discord = require('discord.js')
        let server = message.guild

        let verified = ''
        if (server.verified) {verified = 'Yes'}
        else {verified = 'No'}

        let e = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Server info :')
        .setThumbnail(server.iconURL)
        .addFields(
          {name: 'Server name :', value: server.name, inline: true},
          {name: 'Server ID :', value: server.id, inline: true},
          {name: 'Owner ID :', value: server.ownerID, inline: true},
          {name: 'Server region :', value: server.region, inline: true},
          {name: 'MFA Level :', value: server.mfaLevel, inline: true},
          {name: 'Server created at :', value: server.createdAt, inline: true},
          {name: 'I joined at :', value: server.joinedAt, inline: true},
          {name: 'AFK Channel :', value: server.afkChannel, inline: true},
          {name: 'Member Count :', value: server.memberCount, inline: true},
          {name: 'Verification level :', value: server.verificationLevel, inline: true},
          {name: 'Is this guild verified ?', value: verified, inline: true}
        )
        .setFooter('Mad by Lumap#0149')
        message.channel.send(e)
	},
};
