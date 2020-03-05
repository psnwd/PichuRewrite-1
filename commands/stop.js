module.exports = {
	name: 'stop',
	usage: 'pichu stop',
  category: 'music',
	description: 'Stop the current song AND the queue',
	async execute(client,message,args,dbl,queue) {
		const serverQueue = queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send("You're not in a vocal channel");
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
    message.channel.send('Music successfully stopped') 
	},
};
