module.exports = {
    name: 'server-invite',
    category: 'fun',
      description: 'Creates an invite of YOUR server',
      execute(client,message,args) {
          const Discord = require('discord.js')
  
          async function replyWithInvite(message) {
            let invite = await message.channel.createInvite(
            {
              maxAge: 86400000, // maximum time for the invite, in milliseconds
              maxUses: 100 // maximum times it can be used
            },
            `Requested with command by ${message.author.tag}`
          )
          .catch(console.log);
          
            message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
          }
          replyWithInvite(message)
          
  
      },
  };