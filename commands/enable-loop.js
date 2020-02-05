
module.exports = {
    name: 'enable-loop',
    description: 'Loops the current song',
    category: 'misc',
    async execute(client,message) {
        client.player.setRepeatMode(message.guild.id, true);
        // Get the current song
        let song = await client.player.nowPlaying(message.guild.id);
        message.channel.send(`${song.name} will be repeated indefinitely!`);
    },
}
