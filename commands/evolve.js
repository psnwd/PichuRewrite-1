module.exports = {
	name: 'evolve',
  category: 'misc',
	description: 'Pichu is now a pikachu!',
	async execute(client,message) {
        const Discord = require('discord.js')
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('Pichu is evolving... See how it evolves [here !](https://www.youtube.com/watch?v=dQw4w9WgXcQ)')
        .setFooter('Made by Lumap#0149')
        message.channel.send(embed)
	},
};
