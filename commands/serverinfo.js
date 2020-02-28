module.exports = {
	name: 'serverinfo',
  category: 'utility',
  aliases: ['si'],
	description: 'Shows server info',
	execute(client,message) {
        const Discord = require('discord.js')
        let server = message.guild
        let e = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor('Server info :')
        .setThumbnail(server.iconURL)
        .addField('Server name :', server.name)
        .addField('Server ID :', server.id)
        .addField('Owner ID :', server.ownerID)
        .addField('Owner :', server.owner.name+'#'+server.owner.discriminator)
        .addField('Server region :', server.region)
        .addField('MFA Level :', server.mfaLevel)
        .addField('Seerver created at :', server.createdAt)
        .addField('I joined at :', server.joinedAt)
        .addField('Default channel :', server.defaultChannel)
        .addField('AFK Channel :', server.afkChannel)
        .addField('Member count :', server.memberCount)
        .addField('Verification level :', server.verificationLevel)
        let verified = ''
        if (server.verified) {verified = 'Yes'}
        else {verified = 'No'}
        e.addField('Is this guild verified ?', verified)
        message.channel.send(e)
	},
};
