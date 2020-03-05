module.exports = {
	name: 'stop',
	usage: 'pichu stop',
  category: 'music',
	description: 'Stop the current song AND the queue',
	async execute(client,message,args,dbl,queue) {
		const serverQueue = queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send("You're not in a vocal channel");
		if (serverQueue.songs[0].author !== message.author) return message.channel.send(new Discord.MessageEmbed() .setColor('RANDOM') .setDescription(`Only ${serverQueue.songs[0].author} can stops the queue, beacause he requested the current song`))
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
    message.channel.send('Music successfully stopped') 
	},
};
