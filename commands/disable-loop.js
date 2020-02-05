
module.exports = {
    name: 'disable-loop',
    description: 'Disables the loop',
    category: 'music',
    async execute(client,message) {
        client.player.setRepeatMode(message.guild.id, false);
        // Get the current song
        let song = await client.player.nowPlaying(message.guild.id);
        message.channel.send(`${song.name}  will no longer be repeated indefinitely!`);
    },
}
