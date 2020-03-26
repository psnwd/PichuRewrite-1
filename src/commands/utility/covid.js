module.exports = {
    name: 'covid',
    aliases: ['coronavirus', 'cv'],
    description: 'Shows some coronavirus stats',
    usage: 'pichu covid [country name]',
    category: 'utility',
    async execute(client,message,args) {
        const covid = require('novelcovid');
        const Discord = require('discord.js')
        if (args.join(' ')) {
        let country = await covid.getCountry({country: args.join(' ')});
   let emb = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle(`Coronavirus stats in ${country.country} :`)
   .setDescription(`Total cases: **${country.cases}**\nToday cases : **${country.todayCases}**\nDeaths : **${country.deaths}**\nToday deaths : **${country.todayDeaths}**\nRecovered : **${country.recovered}**\nActive cases: **${country.active}**\nCritical persons : **${country.critical}**`)
   .setThumbnail(country.countryInfo.flag)
   .setFooter('Made by Lumap#0149')
   message.channel.send(emb)
    } else {
        let all = await covid.getAll();
        let emb = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Coronavirus stats all around the world :')
        .setFooter('Made by Lumap#0149')
        .setDescription(`Total cases : **${all.cases}**\nTotal deaths : **${all.deaths}**\nTotal recovered : **${all.recovered}**\nUpdated : **${new Date(all.updated)}**`)
        message.channel.send(emb)
    }
    }
}