module.exports = {
    name: 'owoify',
    aliases: ['owotxt'],
    category: 'fun',
    usage: 'pichu owoify <text>',
    description: 'Owo a text',
    async execute(client,message,args,dbl,queue) {
       
        const nekoclient = require('nekos.life');
const neko = new nekoclient();
            if (!args.join(' ')) return message.channel.send('Please provide text!')
  let owo = await neko.sfw.OwOify({text: args.join(' ')});
  message.channel.send(owo.owo);

    }
}