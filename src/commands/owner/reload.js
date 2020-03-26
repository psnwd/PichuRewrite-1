module.exports = {
    name: 'reload',
    category: 'owner',
    description: 'Reloads a command',
    usage: 'pichu reload <command name>',
    async execute(client,message,args) {
        if (!args) return message.channel.send('please provide a command name') 
        const command = client.commands.get(args.join(' ')) 
        if (!command) return message.channel.send('Invalid command') 
        delete require.cache[require.resolve(`../${command.category}/${command.name}.js`)];
        client.commands.delete(command.name)
        client.commands.set(command.name, require(`../${command.category}/${command.name}.js`)) 
        message.channel.send('Reloaded ``' +command.name+'``!') 
    }
}