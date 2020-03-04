const ytdl = require("ytdl-core"), ytpl = require("ytpl"), ytsearch = require("yt-search"), { Util } = require("discord.js"), Discord = require('discord.js');


module.exports = {
    name: 'play',
    description: 'Play a song!',
    category: 'music',
    async execute(client,message,args,dbl,queue) {

	

		
		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) return message.channel.send("❌ You are not in a voice channel, please join one first!")
	  
		const permissions = voiceChannel.permissionsFor(message.guild.me)
		if (!permissions.has("CONNECT")) return message.channel.send(new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setDescription('I don\'t have the permissions to connect to a voice channel')
		.setFooter('Made by Lumap#0149'))
		if (!permissions.has("SPEAK")) return message.channel.send(new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setDescription('I don\'t have the permissions to talk here!')
		.setFooter('Made by Lumap#0149'))
	  
		const url = args.join(" ")
		if (url.includes("list=")) {
		  const playlist = await ytpl(url.split("list=")[1])
		  const videos = playlist.items;
	  
		  message.channel.send(new Discord.MessageEmbed()
		  .setColor('RANDOM')
		  .setDescription(`${playlist.title}(${videos.length} songs) has been added to the queue!`)
		  .setFooter('Made by Lumap#0149 | Hint : playlists max length is 100'))
	  
		  for (const video of videos) await queueSong(video, message, voiceChannel, queue)
		} else {
		  let video;
		  try {
			video = await ytdl.getBasicInfo(url)
		  } catch(e) {
			try {
			  const results = await ytsr(url)
			  const videos = results.videos.slice(0, 10)
			  let index = 0;
			  await message.channel.send(new Discord.MessageEmbed()
			  .setColor('RANDOM')
			  .setDescription([
				"__**Song selection:**__",
				videos.map(v => ++index + " - **" + v.title + "**").join("\n"),
				"**Select your song by sending the number from 1 to " + videos.length + " in chat.**"
			  ].join("\n\n"))
			  .setFooter('Made by Lumap#0149 | You have 15 seconds to give a response'))
	  
			  let response;
			  try {
				response = await message.channel.awaitMessages(msg => 0 < msg.content && msg.content < videos.length + 1 && msg.author.id == message.author.id, {
				  max: 1,
				  time: 15000,
				  errors: ['time']
				});
			  } catch(e) {
				  console.log(e)
				return message.channel.send(new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setDescription('Video selection timed out, cancelling it...')
				.setFooter('Made by Lumap#0149'))
			  }
			  const videoIndex = parseInt(response.first().content)
			  video = await ytdl.getBasicInfo(videos[videoIndex - 1].videoId)
			} catch(e) {
			  console.log(e)
			  return message.channel.send(new Discord.MessageEmbed()
			  .setColor('RANDOM')
			  .setDescription('I wasn\'t able to find a result :(')
			  .setFooter('Made by Lumap#0149'))
			}
		  }
		  
		  await message.channel.send(new Discord.MessageEmbed()
		  .setColor('RANDOM')
		  .setDescription(`**${video.title}** has been added to the queue!`))
		  return await queueSong(video, message, voiceChannel, queue)
		}
	  
	  
	  async function queueSong(video, message, voiceChannel, queue) {
		const serverQueue = queue.get(message.guild.id)
	  
		const song = {
		  id: video.id || video.video_id,
		  title: Util.escapeMarkdown(video.title),
		  url: "https://www.youtube.com/watch?v=" + (video.id || video.video_url)
		}
	  
		if (!serverQueue) {
		  const queueConstruct = {
			textChannel: message.channel,
			voiceChannel,
			connection: null,
			songs: [song],
			volume: 100,
			playing: true
		  }
	  
		  try {
			const connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			queue.set(message.guild.id, queueConstruct)
			playSong(message.guild, queue, queueConstruct.songs[0])
		  } catch(e) {
			console.log(e)
			message.channel.send('An error happened while trying to join the voice channel, please try again')
			return queue.delete(message.guild.id)
		  }
		} else serverQueue.songs.push(song);
	  
		return;
	  }
	  
	  async function playSong(guild, queue, song) {
		const serverQueue = queue.get(guild.id);
	  
		if (!song) {
		  serverQueue.voiceChannel.leave();
		  queue.delete(guild.id);
		  return;
		}
	  
		serverQueue.connection.play(ytdl(song.id))
		  .on("finish", reason => {
			serverQueue.songs.shift();
			playSong(guild, queue, serverQueue.songs[0])
		  })
		  .on("error", console.error)
		  .setVolumeLogarithmic(serverQueue.volume / 250)
		
		serverQueue.textChannel.send(new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setDescription(`Now playing **[${song.title}](${song.url})**`))
	  }
    },
}

const ytsr = (url) => new Promise((resolve, reject) => ytsearch(url, (err, r) => err ? reject(err) : resolve(r)))
