
module.exports = {
    name: 'queue',
    description: 'Shows the queue',
    category: 'music',
    async execute(client,message) {
        let queue = await client.player.getQueue(message.guild.id);
        message.channel.send('Server queue:\n'+(queue.songs.map((song, i) => {
            return `${i === 0 ? 'Current' : `#${i+1}`} - ${song.name} | ${song.author}`
        }).join('\n')));
    },
}
