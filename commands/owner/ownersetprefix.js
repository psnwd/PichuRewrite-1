module.exports = {
    name: 'owner-setprefix',
    usage: 'pichu owner-setprefix <new prefix>',
    description: 'Changes pichu\'s prefix on this server',
    category: 'utility',
    execute(client,message,args) {
        if (!message.author.id === client.ownerID) return message.channel.send('Only servers admins can change my prefix');
        if (!args.join(' ')) return message.channel.send('Please provide a new prefix between 1 and 15 chars!');
        args.join(' ');
        if (args.length < 1 || args.length > 15) return message.channel.send('Please provide a new prefix **between 1 and 15 chars**!');
        require('axios').post('https://pichu-api.glitch.me/database/prefixes/set', {password: client.pichuApiPassword, key: message.guild.id, value: args}).then(result => {
            if (result.data) {return message.channel.send('Prefix set to **'+args+'**!')} else {return message.channel.send('Sorry, but an error occured! Please retry!')}
        })    }
}