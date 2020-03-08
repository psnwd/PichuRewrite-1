const Quick = require("quick.db-plus")
const Discord = require('discord.js')
module.exports = {
    name: 'snipe',
    usage: 'pichu snipe',
    description: 'Get the last deleted message',
    category: 'moderation',
    async execute(client,message) {
    if (!client.snipes.get(message.channel.id)) return message.channel.send("There is nothing to snipe")
    const embed = new Discord.MessageEmbed()
    .setTitle(client.snipes.get(message.channel.id).user.tag)
    .setDescription(client.snipes.get(message.channel.id).content)
    .setColor("RANDOM")
    .setFooter('Made by Link#4444')
    message.channel.send(embed)
    },
} 
