module.exports = {
	name: 'disconnect',
  category: 'music',
	description: 'disonnects to the VC',
	execute(client,message) {
		let voiceChannel = message.member.voiceChannel
    if (!voiceChannel) return message.channel.send('You\'re not connected to a voice channel!')
    voiceChannel.leave()
    message.channel.send('Goodbye!')
	},
};
