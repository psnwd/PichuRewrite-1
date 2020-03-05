const Discord = require('discord.js')

  module.exports = {
	name: 'meme',
aliases: ['memes'], 
  category: 'fun',
  usage: 'pichu meme',
	description: "Shows a meme",
	async execute (client,message) {
        message.channel.send('Generating...').then(async msg => {
          const res = await require('axios').get('https://api.ksoft.si/images/rand-reddit/dankmemes', {headers: {'Authorization': 'Bearer '+client.ksoftsi}})

        msg.edit(new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`Image not showing? Click [here](${res.data.image_url}) !`)
      .setImage(res.data.image_url)
      .setTimestamp()
        .setFooter('Made by Lumap#0149'))})

	}
};
