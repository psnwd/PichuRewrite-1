module.exports = {
	name: 'nowplaying',
  aliases: ['np'],
  category: 'music',
	description: 'What song is currently playing?',
	async execute(client,message) {
		const serverQueue = message.client.queue.get(message.guild.id);
 
		if (!serverQueue) return message.channel.send('No song is playing right now :(');
;
		message.channel.send('Now playing '+serverQueue.songs[0].title);
	},
};
