
module.exports = {
    name: 'stop',
    description: 'Stops the current song',
    category: 'music',
    async execute(client,message) {
          client.player.stop(message.guild.id);
        message.channel.send('Music stopped!');
    },
}
