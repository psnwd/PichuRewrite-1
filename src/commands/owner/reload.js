
module.exports = {
    name: 'reload',
    category: 'owner',
    description: 'Reloads a command',
    usage: 'pichu reload <command/function> <command/function name>',
    async execute(client,message,args) {
        if (!args) return message.channel.send('Wrong usage of the command');
        if (!args[1]) return message.channel.send('Wrong usage of the command');
        if (args[0] === 'command') {
        const command = client.commands.get(args.slice(1).join(' ')) 
        if (!command) return message.channel.send('Invalid command') 
        delete require.cache[require.resolve(`../${command.category}/${command.name}.js`)];
        client.commands.delete(command.name)
        client.commands.set(command.name, require(`../${command.category}/${command.name}.js`)) 
        message.channel.send('Reloaded command **' +command.name+'** !') 
        } else if (args[0] === 'function') {
            const f = client.functions.get(args.slice(1).join(' '))
            if (!f) return message.channel.send('Invalid function')
            delete require.cache[require.resolve(`../../functions/${f.name}.js`)]
            client.functions.delete(f)
            client.commands.set(f.name, require(`../../functions/${f.name}.js`))
            message.channel.send('Reloaded function **'+f.name+'** !')
        } else return message.channel.send('Wrong usage of the command');
    }
}