module.exports = {
    name: 'play',
    description: 'Plays music!',
    category: 'music',
    async execute(client,message,args) {
        if (!args) return message.channel.send('Please provide a song name or a youtube url!')
        
        let aSongIsAlreadyPlaying = client.player.isPlaying(message.guild.id);
        // If there's already a song playing 
        if(aSongIsAlreadyPlaying){
            // Add the song to the queue
            let song = await client.player.addToQueue(message.guild.id, args.join(' '));
            return message.channel.send(`${song.name} added to queue!`);
        } 
            // Else, play the song
            client.player.play(message.member.voice.channel, args.join(' ')).then((song) => {
            message.channel.send(`Currently playing ${song.name}!`);
        }).catch(() => {
            message.channel.send(`No song found for ${args.join(' ')}`);
        });
        
         client.player.play(message.member.voice.channel, args[0]).then((song) => {
            message.channel.send(`Currently playing ${song.name}!`);
        }).catch(() => {
            message.channel.send(`No song found for ${args[0]}`);
        });
        
        
    },
}
