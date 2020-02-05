
module.exports = {
    name: 'nowplaying',
    description: 'Shows the current song',
    category: 'music',
    async execute(client,message) {
         let song = await client.player.nowPlaying(message.guild.id);
        message.channel.send(`Currently playing ${song.name}...`);
    },
}
