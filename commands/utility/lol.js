
module.exports = {
  name: 'lol',
  aliases: ['olo'],
  category: 'utility',
  usage: 'pichu lol',
	description: 'Says lol',
	async execute(client,message,args) {
  message.channel.send('lol');
	},
};
