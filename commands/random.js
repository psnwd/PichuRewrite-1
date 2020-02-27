jsmodule.exports = {
    name: 'random',
    category: 'misc',
	description: "This command will sometimes execute, sometimes not",
	execute(client,message,args) {
        if (!args) return message.channel.send('You need to provide a number between 1 and 100!')
        let number = parseInt(args, 10)
        if (!number) return message.channel.send('Invalid number')
        if (number<1 || number>100) return message.channel.send('Invalid number')
        let command = Math.floor(Math.random()*number)
        let command2 = Math.floor(Math.random()*number)
        if (command===command2) {return message.channel.send('Congrats! You win a free hug! *hugs '+message.author.tag+'!*')}
        else {return message.channel.send('Oh no, you lose! Maybe better luck next time...')}
    
  },
};
