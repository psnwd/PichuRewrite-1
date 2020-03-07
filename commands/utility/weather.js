module.exports = {
	name: 'weather',
    aliases: ['w'], 
    usage: 'pichu weather <city>',
    category: 'utility',
	description: "Add me in your server!",
	execute(client,message,args) {
		const Discord = require('discord.js')
 
  if (!args.join(' ')) return message.reply('You need to provide a city')
  //ya yeet
  var weather = require('weather-js')
 let city = args.join(' ')
weather.find({search: city, degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
 

  
        var current = result[0].current;
        var location = result[0].location;
 
        const embed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0xffd700)
        .addFields(
            {name: 'Timezone', value: `UTC${location.timezone}`, inline: true},
        {name: 'Degree type', value: location.degreetype, inline: true},
        {name: 'Temperature',value: `${current.temperature} degrees`, inline: true},
        {name: 'Feels like',value: `${current.feelslike} degrees`, inline: true},
        {name: 'winds',value: current.winddisplay, inline: true},
        {name: 'humidity', value: `${current.humidity}%`, inline: true}
        )
        message.channel.send(embed);
});
 
 

    	},
};