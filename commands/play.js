module.exports = {
    name: 'play',
    description: 'Plays music!',
    category: 'music',
    async execute(client,message,args) {
        if (!args) return message.channel.Send('Please provide a song name or a youtube url!')
        let aSongIsAlreadyPlaying = client.player.isPlaying(message.guild.id);
        // If there's already a song playing 
        if(aSongIsAlreadyPlaying){
            // Add the song to the queue
            let song = await client.player.addToQueue(message.guild.id, args[0]);
            message.channel.send(`${song.name} added to queue!`);
        } else {
            // Else, play the song
            client.player.play(message.member.voice.channel, args[0]).then((song) => {
            message.channel.send(`Currently playing ${song.name}!`);
        }).catch(() => {
            message.channel.send(`No song found for ${args[0]}`);
        });
        }
            song.queue.on('end', () => {
            message.channel.send('The queue is empty, leaving voice channel...');
        });
        song.queue.on('songChanged', (oldSong, newSong, skipped, repeatMode) => {
            if(repeatMode){
                message.channel.send(`Playing ${newSong} again...`);
            } else {
                message.channel.send(`Now playing ${newSong}...`);
            }
        });
    },
}
