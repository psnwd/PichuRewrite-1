module.exports = {
    name: 'github',
    category: 'misc',
    usage: 'pichu github',
      description: 'Shows a link to my github',
      async execute(client,message,args) {
          message.channel.send('Hi! Here is my girhub repo : https://github.com/lumap/PichuRewrite')
          },
  
      };
