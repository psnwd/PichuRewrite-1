module.exports = {
    name: 'say',
    description: 'say things',
    category: 'misc',
    async execute(client,message,args) {
        message.delete().then(
        message.channel.send(args.join(' ')))
    },
}
