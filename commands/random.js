module.exports = {
    name: 'random',
    category: 'misc',
	description: "This command will sometimes execute, sometimes not",
	execute(client,message,args,dbl) {
    dbl.hasVoted(message.author.id).then(voted => {
      if (!voted) { return message.channel.send('You need to vote for me in order to use this command! https://top.gg/bot/674497635171696644/vote')}
     else {

      if (!args) return message.channel.send('You need to provide a number between 1 and 100!')
      let number = parseInt(args, 10)
      if (!number) return message.channel.send('Invalid number')
      if (number<1 || number>100) return message.channel.send('Invalid number')
      let command = Math.floor(Math.random()*number)
      let command2 = Math.floor(Math.random()*number)
      if (command===command2) {return message.channel.send('Congrats! You win a free hug! *hugs '+message.author.tag+'!*')}
      else {return message.channel.send('Oh no, you lose! Maybe better luck next time...')}
  
      }
  });
       
  },
};
