const Discord = require('discord.js')
module.exports = {
	name: 'shuffle',
  category: 'music',
  usage: 'pichu shuffle',
	description: 'Shuffles the queue!',
	async execute(client,message,args,dbl,queue) {
   
        if (!message.member.voice.channel) return message.channel.send('You are not in a voice channel!')
        const serverQueue = queue.get(message.guild.id)
        if (!serverQueue) return message.channel.send('There is nothing playing')
        if (serverQueue.songs.length < 3) return message.channel.send('There is no queue to shuffle (queue need at least 3 songs to be shuffled)')
        if (serverQueue.songs[0].author.id !== message.author.id) return message.channel.send(new Discord.MessageEmbed() .setColor('RANDOM') .setDescription(`Only **${serverQueue.songs[0].author.username}** can do this, beacause he requested the current song`) .setFooter('Made by Lumap#0149')).then(m => {setTimeout(() => {m.delete()}, 15000)})
        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
        serverQueue.songs = shuffle(serverQueue.songs)
        
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(client.user.tag, client.user.avatarURL({format: 'png', dynamic: true, size: 2048}))
        .setColor('RANDOM')
        .setDescription('Queue shuffled! ')
        .setFooter('Made by Lumap#0149')
        )
        
      

        
	},
};
