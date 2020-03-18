module.exports = {
	name: 'clear',
  category: 'music',
  usage: 'pichu clear',
	description: 'Clears the queue',
	async execute(client,message,args,dbl,queue) {
        let output = queue.delete(message.guild.id)
        if (output) {return message.channel.send('Queue deleted!')} else {return message.channel.send('Nothing is playing!')}
	},
};
