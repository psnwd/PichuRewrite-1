module.exports = {
    name: 'resetprefix',
    usage: 'pichu resetprefix',
    description: 'Changes pichu\'s prefix on this server',
    category: 'utility',
    execute(client,message) {
        if (!message.member.permissions.toArray().includes("ADMINISTRATOR")) return message.channel.send('Only servers admins can change my prefix');
        
        
        require('axios').post('https://pichu-api.glitch.me/database/prefixes/set', {password: client.pichuApiPassword, key: message.guild.id, value: 'pichu '}).then(result => {
            if (result.data) {return message.channel.send('Prefix resetted!')} else {return message.channel.send('Sorry, but an error occured! Please retry!')}
        })    }
}
