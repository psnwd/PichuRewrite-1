module.exports = {
    name: 'owner-resetprefix',
    usage: 'pichu owner-resetprefix',
    description: 'Changes pichu\'s prefix on this server',
    category: 'owner',
    execute(client,message) {
require('axios').post('https://pichu-api.glitch.me/database/prefixes/set', {password: client.pichuApiPassword, key: message.guild.id, value: 'pichu '}).then(result => {
            if (result.data) {return message.channel.send('Prefix resetted!')} else {return message.channel.send('Sorry, but an error occured! Please retry!')}
        })    }
}
