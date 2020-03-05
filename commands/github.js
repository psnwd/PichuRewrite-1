module.exports = {
    name: 'github',
    category: 'misc',
    usage: 'pichu github',
      description: 'Shows a link to my github',
      async execute(client,message,args) {
          message.channel.send('Hi! To see my github repo, click here : https://github.com/lumap/PichuRewrite')
          },
  
      };