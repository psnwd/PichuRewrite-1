module.exports = {
    name: 'skip',
    description: 'Skips the current song',
    category: 'music',
    async execute(client,message) {
        let playing = client.player.isPlaying(message.guild.id);
        if(!playing) return message.channel.send(':x: No songs currently playing!');
        let song = await client.player.skip(message.guild.id);
        message.channel.send(`${song.name} skipped!`);
    },
}
