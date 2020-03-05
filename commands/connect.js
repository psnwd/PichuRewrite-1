module.exports = {
	name: 'connect',
  category: 'music',
  aliases: ['summon'],
  usage: 'pichu connect',
	description: 'Connects to the VC',
	async execute(client,message) {
		let voiceChannel = message.member.voice.channel
    if (!voiceChannel) return message.channel.Send('You\'re not connected to a voice channel!')
    voiceChannel.join()
    message.channel.send('Here we go! I\'m connected!')
	},
};
