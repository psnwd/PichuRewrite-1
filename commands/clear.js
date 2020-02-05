module.exports = {
    name: 'clear',
    description: 'Clears the queue',
    category: 'music',
    execute(client,message) {
        let playing = client.player.isPlaying(message.guild.id);
        if(!playing) return message.channel.send(':x: No songs currently playing!');
        let song = await client.player.skip(message.guild.id);
        message.channel.send(`${song.name} skipped!`);
    },
}
