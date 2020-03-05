module.exports = {
    name: 'ping',
    usage: 'pichu ping',
    description: 'Ping? Pong! Shows your lag',
    category: 'misc',
    async execute(client,message) {
        message.channel.send(`Pong! My ping is **${client.ws.ping}** ms!`)
    },
}
