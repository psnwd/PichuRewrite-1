const Discord = require('discord.js')

  module.exports = {
	name: 'pichu',
  category: 'fun',
	description: "Shows a pichu",
	execute: async (client,message) => {
    const res = await require('axios').get('https://api.ksoft.si/images/rand-reddit/pichu', {headers: {'Authorization': 'Bearer '+client.ksoftsi}})
      const e = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`Image not showing? Click [here](${res.data.image_url}) !`)
      .setImage(res.data.image_url)
      .setTimestamp()
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL);
message.channel.send(e)

	}
};
