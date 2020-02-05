module.exports = {
    name: 'resume',
    description: 'Resumes the current song',
    category: 'misc',
    async execute(client,message) {
 let song = await client.player.resume(message.guild.id);
        message.channel.send(`${song.name} resumed!`);
 },
}
