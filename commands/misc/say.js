module.exports = {
    name: 'say',
    usage: 'pichu say <text>',
    description: 'say things',
    category: 'misc',
    async execute(client,message,args) {
        if (!args.join(' ')) return message.channel.send('I can\'t say nothing!')
        message.delete().then(
        message.channel.send(args.join(' ')))
    },
   } 