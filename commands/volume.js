
module.exports = {
    name: 'volume',
    description: 'Changes the volume',
    category: 'music',
    async execute(client,message,args) {
       client.player.setVolume(message.guild.id, parseInt(args[0]));
        message.channel.send(`Volume set to ${args[0]} !`);
    },
}
