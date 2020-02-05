module.exports = {
    name: 'clear',
    description: 'Clears the queue',
    category: 'music',
    execute(client,message) {
         client.player.clearQueue(message.guild.id);
        message.channel.send('Queue cleared!');
    
    },
}
