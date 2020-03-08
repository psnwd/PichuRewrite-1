module.exports = {
    name: 'votecheck',
    category: 'owner', 
    description: 'Checks if someone has voted',
    usage: 'pichu vote <userid>',
    async execute(client,message,args,dbl,queue) {
        if (!args.join(' ')) return message.channel.send('Please provide me a user id!')
        checkifuserid = client.users.cache.get(args.join(' '))
        if (!checkifuserid) { return message.channel.send('This is not a userid !') } else {
            dbl.hasVoted(`${args.join(' ')}`).then(voted => {
                if (voted) {return message.channel.send('Voted')} else {return message.channel.send('No voted')}
            })
        }
    } 
}