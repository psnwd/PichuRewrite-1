module.exports = {
	name: 'nowplaying',
  aliases: ['np'],
  category: 'music',
	description: 'What song is currently playing?',
	execute(client,message) {
		const serverQueue = message.client.queue.get(message.guild.id);
 
		if (!serverQueue) return message.channel.send('No song is playing right now :(');
;
		return message.channel.send('Now playing '+serverQueue.songs[0].title);
	},
};
