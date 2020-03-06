module.exports = {
    name: 'owoify',
    description: 'Transforms a text into a owo text',
    usage: 'pichu owoify <text>',
    aliases: ['owotext'],
    category: 'fun',
    async execute(client,message,args) {
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();
        if (!args.join(' ')) return message.channel.send('Please provide a text.')  
        async function work() {
            let owo = await neko.sfw.OwOify({text: args.join(' ')});
            message.delete().then(message.channel.send(owo.owo));
        }
        work();
    },
};