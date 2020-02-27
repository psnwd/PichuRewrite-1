module.exports = {
    name: 'changelog',
    aliases: ['github'],
    category: 'misc',
      description: 'Shows a link to my github',
      async execute(client,message,args) {
          message.channel.send('Hi! To see my changelog, you need to go visit my github repo. https://github.com/lumap/PichuµRewrite')
          },
  
      };