const Discord = require('discord.js')
const {
	Util
} = require('discord.js');
const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    description: 'Play a song!',
    category: 'music',
    async execute(client,message,args) {
        const queue = message.client.queue;
         const serverQueue = message.client.queue.get(message.guild.id);
   
		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) return message.channel.send('You\'re not in a voice channel!');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
			return message.channel.send(nopermissions);
		}

		const songInfo = await ytdl.getInfo(args[0]);
		const song = {
			title: songInfo.title,
			url: songInfo.video_url,
		};
       

		if (!serverQueue) {
			const queueContruct = {
				textChannel: message.channel,
				voiceChannel: voiceChannel,
				connection: null,
				songs: [],
				volume: 5,
				playing: true,
			};

			queue.set(message.guild.id, queueContruct);

			queueContruct.songs.push(song);
      


			try {
				var connection = await voiceChannel.join();
				queueContruct.connection = connection;
        
				this.play(message, queueContruct.songs[0]);
        
     message.channel.send('Now playing '+song.title);
			} catch (err) {
				console.log(err);
				queue.delete(message.guild.id);
				return message.channel.send(err);
			}
		} else {
			serverQueue.songs.push(song);
			return message.channel.send(song.title+' has been added to the queue!');
		}
	},

	play(message, song) {
		const queue = message.client.queue;
		const guild = message.guild;
		const serverQueue = queue.get(message.guild.id);
	
		if (!song) {
			serverQueue.voiceChannel.leave();
			queue.delete(guild.id);
			return;
		}
	
		const dispatcher = serverQueue.connection.play(ytdl(song.url))
			.on('end', () => {
				console.log('Finish!');
				serverQueue.songs.shift();
				this.play(message, serverQueue.songs[0]);
			})
			.on('error', error => {
				console.error(error);
			});
		dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    },
}
