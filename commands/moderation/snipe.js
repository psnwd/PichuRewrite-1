const Quick = require("quick.db-plus")
module.exports = {
    name: 'snipe',
    usage: 'pichu snipe',
    description: 'Get the last deleted message',
    category: 'moderation',
    async execute(client,message) {
    if (!client.snipes.get(message.channel.id)) return message.channel.send("There is nothing to snipe")
    const embed = new Discord.MessageEmbed()
    .setDescription("**"+client.snipes.get(message.channel.id).user.tag+"**: "+client.snipes.get(message.channel.id).content)
    message.channel.send(embed)
    },
} 
