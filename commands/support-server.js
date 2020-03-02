module.exports = {
    name: 'support-server',
    aliases: ['support'],
    category: 'misc',
      description: 'Shows a link to my support server',
      async execute(client,message,args) {
          message.channel.send('Hi! If you want to access my support server, here is the link : discord.gg/uWzaaEK')
          },
  
      };