
const Discord = require('discord.js');


const nouser = new Discord.MessageEmbed()
.setColor('#5147FF')
.setAuthor("You didn't provide a userid/@mention")


const missingpermsfromauthor = new Discord.MessageEmbed()
.setColor('#5147FF')
.setAuthor("You don't have the following permission : 'BAN_MEMBERS'")



module.exports = {
	name: 'ban',
    aliases: ['b'],
    category: 'moderation',
    usage: 'pichu ban <@mention/userid>',
	description: 'Ban a user',
	execute(client,message) {
    const { ownerID } = client.ownerID
    let user = message.mentions.users.first() || client.users.cache.get(args.join(' '))
		if (!user) {
			return message.channel.send(nouser);
		}
    if (user.id === ownerID) return message.reply('I can\'t ban my dev')
    
if(!message.member.permissions.toArray().includes("BAN_MEMBERS"))
   return message.channel.send(missingpermsfromauthor)
    
		
const userbanned = new Discord.MessageEmbed()
.setColor('#5147FF')
.setAuthor('User banned!')
.setDescription(`**${user.username}#${user.discriminator}** is now banned from this server!`)
.setFooter("Made by Lumap#0149'");
    
    user.send(`You were banned from **${message.guild.name}** by ${message.author.username}#${message.author.discriminator}`)
		return user
			.ban()
			.then(() => message.channel.send(userbanned))
			.catch(error => message.reply("ERROR"));
	},
};