const Discord = require('discord.js')
module.exports = {
    name: 'pause',
    category: 'music',
      description: 'Pauses the current song',
      async execute(client,message,args,dbl,queue) {

        if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('You are not in a voice channel')
        .setFooter('Made by Lumap#0149'))

  const serverQueue = queue.get(message.guild.id)
  if (!serverQueue) return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Nithing is playong right now')
  .setFooter('Made by Lumap#0149'))
  if (!serverQueue.playing) return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('The player is aleready paused!')
  .setFooter('Made by Lumap#0149'))

  serverQueue.playing = false
  serverQueue.connection.dispatcher.pause()
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Paused the player!')
  .setFooter('Made by Lumap#0149'))
          
  
      },
  };

