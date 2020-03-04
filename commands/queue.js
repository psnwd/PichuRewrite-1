module.exports = {
    name: 'queue',
    category: 'music',
      description: 'Shows server queue',
      async execute(client,message,args,dbl,queue) {

        const serverQueue = queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Please add me in a voice channel');
        if (!serverQueue) return message.channel.send('The queue is empty!');
        const output = []
        for (let i = 0; i < Math.min(serverQueue.songs.length, 10); i++) {
          output[i] = [
            `-${serverQueue.songs[i].title}\n`
          ].join('\n');
        }
        const Discord = require('discord.js')
        let queueemb = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Server queue')
        .setDescription('**'+output.join(' ')+'**')
        if (queue.length > 10) {queueemb.setFooter('Made by Lumap#0149 | '+queue.length-10+' more songs...')} else {queueemb.setFooter('Made by Lumap#0149')}
        message.channel.send(queueemb)
       // message.channel.send([
        //    "__**Song queue:**__",
         //   serverQueue.songs.map(song => "- " + song.title).join("\n")
         // ].join("\n\n"))
          
  
      },
  };
