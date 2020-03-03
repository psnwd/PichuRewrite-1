module.exports = {
    name: 'avatar',
    aliases: ['pfp'],
    category: 'utility',
      description: 'Shows user avatar',
      async execute(client,message,args) {
        const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Please add me in a voice channel');
        if (!serverQueue) return message.channel.send('The queue is empty!');
        
        message.channel.send([
            "__**Song queue:**__",
            serverQueue.songs.map(song => "- " + song.title).join("\n")
          ].join("\n\n"))
          
  
      },
  };

