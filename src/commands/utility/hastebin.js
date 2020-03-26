module.exports = {
    name: 'hastebin',
    aliases: ['hb', 'pastebin'],
    description: 'Upload text to hastebin',
    category: 'utility',
    usage: 'pichu hastebin <text>',
    async execute(client,message,args) {
        const hastebin = require('hastebin')
        if (!args.join(' ')) return message.channel.send('Please provide text to upload!')
        hastebin.createPaste(args.join(' '),{
            raw: false,
            contentType: 'text/plain',
            server: 'https://hastebin.com'
            }).then(bin => {message.channel.send(bin)})
    }
}