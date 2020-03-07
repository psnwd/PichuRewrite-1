const Discord = require('discord.js')
module.exports = {
    name: 'volume',
    usage: 'pichu volume [number between 1 and 150]',
    aliases: ['vol'],
    category: 'music',
      description: 'Changes the volume',
      async execute(client,message,args,dbl,queue) {

        if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('You are not in a voice channel!')
        .setFooter('Made by Lumap#0149'))

  const serverQueue = queue.get(message.guild.id)
  if (!serverQueue) return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Nothing is playing right now :(')
  .setFooter('Made by Lumap#0149'))

  if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`The current volume is **${serverQueue.volume}**`)
  .setFooter('Made by Lumap#0149'));

  if (serverQueue.songs[0].author.id !== message.author.id) return message.channel.send(new Discord.MessageEmbed() .setColor('RANDOM') .setDescription(`Only **${serverQueue.songs[0].author.username}** can change the volume, beacause he requested the current song`))
	

  const volume = parseInt(args[0])
  if (!volume || volume > 150) return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Invalid volume! Please provide a number between 1 and 150')
  .setFooter('Made by Lumap#0149'))


  dbl.hasVoted(message.author.id).then(voted => {
    if (!voted && volume>100) {return message.channel.send(new Discord.MessageEmbed() .setColor('RANDOM') .setDescription('Hi. If you want to listen to me with 100+ volume, you have to [vote](https://top.gg/bot/674497635171696644/vote) for me! (having 100+ volume lags the bot)') .setFooter('Made by Lumap#0149'))}
    else {
      serverQueue.volume = volume;
  serverQueue.connection.dispatcher.setVolumeLogarithmic(volume / 250);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`The volume is now **${volume}**!`)
  .setFooter('Made by Lumap#0149'))
          
    }
  });

  
      },
  };

