
  const Discord = require('discord.js')
  
  module.exports = {
    name: 'dblinfo',
    description: 'Shows bot info (if listed on dbl)',
    category: 'misc',
    async execute(client,message,args,dbl) {
        if (!args) return message.channel.send('Please mention the bot or give bot ID');
        let user = message.mentions.users.first() || client.users.cache.get(args.join(' '))
        if (!user) return message.channel.send('Bot not found!');
        if (!user.bot) return message.channel.send('This is not a bot!');
        dbl.getBot(user.id).then(bot => {
          
            let e = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('DBL Botinfo results : ')
            .setThumbnail(user.avatarURL)
            .addFields(
              { name: 'Bot name :', value: bot.username, inline: true },
              { name: 'Bot discriminator (tag) :',value: bot.discriminator, inline: true },
              { name: 'Bot ID :', value: bot.id, inline: true },
              { name: 'Bot library :', value: bot.lib, inline: true },
              { name: 'Bot prefix(es) :', value: bot.prefix, inline: true },
              { name: 'Bot short desc :', value: bot.shortdesc, inline: true },
              { name: 'Bot total votes :', value: bot.points, inline: true },
              { name: 'Bot monthly votes :', value: bot.monthlyPoints, inline: true })
            
            let bottags = ''
            bot.tags.forEach(tag => bottags += tag+', ')
            if (!bottags) bottags = 'No tags'
            e.addFields({ name: 'Bot tags :', value: bottags, inline: true })
            if (bot.website) {e.addFields({ name: 'Bot website :', value: bot.website, inline: true })}
            if (bot.support) {e.addFields({ name: 'Bot support server invite : ', value: 'discord.gg/'+bot.support, inline: true })}
            if (bot.github) {e.addFields({ name: 'Bot github repo :', value: bot.github, inline: true })}
            let botowners = ''
            bot.owners.forEach(owner => botowners += owner)
            e.addFields({name: 'Bot owners ID :', value: botowners})
            if (bot.invite) {e.addFields({ name: 'Bot invite link :', value: bot.invite, inline: true })}
            e.addFields({ name: 'Bot approval date :', value: bot.date, inline: true })
            if (bot.certifiedBot) {e.addFields({ name: 'Is bot certified ?', value: 'Yes', inline: true })}
            else {e.addFields({ name: 'Is bot certified ?', value: 'No', inline: true })}
            if (bot.vanity) {e.addFields({ name: 'Bot vanity URL :', value: bot.vanity, inline: true })}
            e.setFooter('Made by Lumap#0149')
            message.channel.send(e)
        })
    },
  };
  