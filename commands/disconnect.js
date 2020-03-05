module.exports = {
	name: 'disconnect',
  category: 'music',
  usage: 'pichu disconnect',
	description: 'disonnects to the VC',
	async execute(client,message) {
		let voiceChannel = message.member.voice.channel
    if (!voiceChannel) return message.channel.send('You\'re not connected to a voice channel!')
    voiceChannel.leave()
    message.channel.send('Goodbye!')
	},
};
