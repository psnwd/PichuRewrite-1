module.exports = {
    name: 'server-invite',
    category: 'utility',
      description: 'Creates an invite of YOUR server',
      async execute(client,message,args) {
          const Discord = require('discord.js')
  
         try {
            let invite = await message.channel.createInvite(
            {
              maxAge: 86400, // maximum time for the invite, in milliseconds
              maxUses: 100 // maximum times it can be used
            },
            `Requested with command by ${message.author.tag}`
          )
          
          
            message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
          } catch (err) {
            message.channel.send('An error happend during the command : '+err)
          }
  
      },
  };