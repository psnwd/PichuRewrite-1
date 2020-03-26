module.exports = {
    name: 'vote',
    usage: 'pichu vote',
    category: 'misc',
      description: 'Shows a link to vote for me!',
      async execute(client,message,args) {
          message.channel.send('Hi! If you want to vote for me, click here : https://top.gg/bot/674497635171696644/vote')
          },
  
      };
