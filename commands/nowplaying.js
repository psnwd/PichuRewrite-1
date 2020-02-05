
module.exports = {
    name: 'nowplaying',
    description: 'Shows the current song',
    category: 'music',
    async execute(client,message) {
        let playing = client.player.isPlaying(message.guild.id);
        if(!playing) return message.channel.send(':x: No songs currently playing!');
         let song = await client.player.nowPlaying(message.guild.id);
        message.channel.send(`Currently playing ${song.name}...`);
    },
}
