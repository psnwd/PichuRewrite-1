module.exports = {
	name: 'stop',
  category: 'music',
	description: 'Stop the current song AND the queue',
	execute(client,message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send("You're not in a vocal channel");
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
    message.channel.send('Music successfully stopped') 
	},
};
