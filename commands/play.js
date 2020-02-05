module.exports = {
    name: 'play',
    description: 'Plays music!',
    category: 'music',
    async execute(client,message,args) {
        let song = await client.player.play(message.member.voice.channel, args.join(' '))
        message.channel.send(`Currently playing ${song.name}!`);
    },
}
