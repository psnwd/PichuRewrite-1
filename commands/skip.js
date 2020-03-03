module.exports = {
	name: 'skip',
  category: 'music',
	description: 'Skip the current song',
	async execute(client,message,args,dbl,queue) {
		const serverQueue = queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Please add me in a voice channel');
		if (!serverQueue) return message.channel.send('The queue is empty!');
		serverQueue.connection.dispatcher.end();
    message.channel.send('Music skipped! ') 
	},
};
