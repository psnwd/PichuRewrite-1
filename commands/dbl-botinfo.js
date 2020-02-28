
  const Discord = require('discord.js')
  
  module.exports = {
    name: 'dbl-botinfo',
    description: 'Shows bot info (if listed on dbl)',
    category: 'misc',
    execute(client,message,args,dbl) {
        if (!args) return message.channel.send('Please mention the bot or give bot ID');
        let user = message.mentions.users.first() || client.users.get(args.join(' '))
        if (!user) return message.channel.send('Bot not found!');
        if (!user.bot) return message.channel.send('This is not a bot!');
        dbl.getBot(user.id).then(bot => {
            let e = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription('DBL Botinfo results : ')
            .addField('Bot name :', bot.username)
            .addField('Bot discriminator (tag) :', bot.discriminator)
            .addField('Bot ID :', bot.id)
            .setThumbnail(user.avatarURL)
            .addField('Bot\'s library :', bot.lib)
            .addField('Bot prefix(es) :', bot.prefix)
            .addField('Bot short description :', bot.shortdesc)
            let bottags = ''
            bot.tags.forEach(tag => bottags += tag+', ')
            e.addField('Bot tags :', bottags)
            if (bot.website) {e.addField('Bot website :', bot.website)}
            if (bot.support) {e.addField('Bot support server invite : ', 'discord.gg/'+bot.support)}
            if (bot.github) {e.addField('Bot github repo :', bot.github)}
            let botowners = ''
            bot.owners.forEach(owner => botowners += owner)
            e.addField('Bot owners ID :', botowners)
            if (bot.invite) {e.addField('Bot invite link :', bot.invite)}
            e.addField('Bot approval date :', bot.date)
            if (bot.certifiedBot) {e.addField('Is bot certified ?', 'Yes')}
            else {e.addField('Is bot certified ?', 'No')}
            if (bot.vanity) {e.addField('Bot vanity URL :', bot.vanity)}
            e.addField('Bot total votes:', bot.points)
            .addField('Bot monthly votes :', bot.monthlyPoints)
            message.channel.send(e)
        })
    },
  };
  