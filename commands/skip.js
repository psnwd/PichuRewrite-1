module.exports = {
	name: 'skip',
  catrgory: 'music',
	description: 'Skip the current song',
	execute(client,message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Please add me in a voice channel');
		if (!serverQueue) return message.channel.send('The queue is empty!');
		serverQueue.connection.dispatcher.end();
    message.channel.send('Music skipped! ') 
	},
};
