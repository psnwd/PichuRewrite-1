module.exports = {
	name: 'invite',
  category: 'misc',
	description: "Add me in your server!",
	async execute(client,message) {
		message.channel.send(`You want to add me in a server? Well, here is my invite link! https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
	},
};
