const Discord = require('discord.js')
const hastebin = require('hastebin')

  module.exports = {
    name: 'lyrics',
  category: 'music',
  usage: 'pichu lyrics <song name>',
	description: "Shows a random image",
	async execute (client,message,args) {
        if (!args) return message.channel.send('Please provide arguments!')
        
  
          const { KSoftClient } = require('@ksoft/api');

          const ksoft = new KSoftClient(client.ksoftsi_token);
          

                tracks = await ksoft.lyrics.search(args.join(' '), {textOnly: true, limit: 5})
              
                let index = 0;
            let msg = await message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription([
				"__**track selection:**__",
				tracks.map(v => ++index + " - **" + v.name + "**" + ' by **'+ v.artist.name+'**').join("\n"),
				"**Select your song by sending the number from 1 to " + tracks.length + " in chat.**"
        ].join("\n\n"))
        .setFooter('Powered by KSOFT.SI | Made by Lumap#0149'))

            let response;
			  try {
				response = await message.channel.awaitMessages(msg =>msg.content !== 'cancel' &&  0 < msg.content && msg.content < tracks.length + 1 && msg.author.id == message.author.id, {
				  max: 1,
				  time: 15000,
				  errors: ['time']
				});
			  } catch(e) {
          msg.delete()
							return message.channel.send(new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setDescription('Track selection timed out, cancelling it...')
				.setFooter('Powered by KSOFT.SI | Made by Lumap#0149')).then(m => {setTimeout(() => {m.delete()}, 15000)})
        }
        msg.delete()
        let rep = response.first().content
        let lyrics = tracks[rep-1].lyrics
        if (lyrics.length<2000) {
        message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(lyrics)
        .setFooter('Powered by KSOFT.SI | Made by Lumap#0149'))
      } else {
             message.channel.send('Text too long! Uploading it to hastebin...')
             hastebin.createPaste(lyrics,{
               raw: false,
               contentType: 'text/plain',
               server: 'https://hastebin.com'
             }).then(e => {return message.channel.send(e)})

        }
      
          
        
	}
};
