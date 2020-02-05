module.exports = {
    name: 'clear',
    description: 'Clears the queue',
    category: 'music',
    execute(client,message) {
    let queue = await client.player.getQueue(message.guild.id);
    if (!queue) return message.channel.send('There is no queue in this server')
         client.player.clearQueue(message.guild.id);
        message.channel.send('Queue cleared!');
    }
    },
}
