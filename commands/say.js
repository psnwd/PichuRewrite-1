module.exports = {
    name: 'say',
    description: 'say things',
    category: 'misc',
    execute(client,message,args) {
        message.channel.send(args.join(' '))
    },
}
