module.exports = {
	name: 'nowplaying',
  aliases: ['np'],
  category: 'music',
	description: 'What song is currently playing?',
	async execute(client,message,ars,dbl,queue) {
		const serverQueue = queue.get(message.guild.id);
 
		if (!serverQueue) return message.channel.send('No song is playing right now :(');
;
		message.channel.send('Now playing **'+serverQueue.songs[0].title+'**');
	},
};
