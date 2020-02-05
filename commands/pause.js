module.exports = {
    name: 'pause',
    description: 'Pauses the current song',
    category: 'music',
    execute(client,message) {
        let song = await client.player.pause(message.guild.id);
        message.channel.send(`${song.name} paused!`);
    },
}
