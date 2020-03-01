module.exports = {
	name: 'invite',
  category: 'misc',
	description: "Add me in your server!",
	async execute(client,message) {
    message.channel.send('Check your DMs :)')
		message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
	},
};
