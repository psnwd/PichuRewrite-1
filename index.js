//Do not touch this
const Discord = require('discord.js')
const Client = require('./client/Client')
const newUsers = new Discord.Collection()
const path = require('path')
const client = new Client()
const fs = require('fs')
const queue = new Map()
client.version = require('./package.json').version






//
//
//
//Part to customize if you want to selfhost the bot
client.ownerID = '635383782576357407'//insert ID here
client.prefix = 'pi '//insert prefix here 
client.bot_token = 'Njc0NDk3NjM1MTcxNjk2NjQ0.XlaiYg.xeUN6-KlQWC4G9Wwd_j4WOlhbf8'//insert bot token here
client.dbl_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDQ5NzYzNTE3MTY5NjY0NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTgyNzEyNjMzfQ.Ovr1uUKctExQ9LKLNDhHFPPPcGgbKiN8hxalRxv6HSk'
client.ksoftsi = '7bc7dd120e05fc2390ab5494a527a8a0577d0ae0';
//
//
//

const DBL = require("dblapi.js");
const dbl = new DBL(client.dbl_token, client)


// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})



//initializing commands here
client.commands = new Discord.Collection()
 var commandFiles = fs
     .readdirSync(`./commands`)
    .filter(file => file.endsWith('.js'));

  for (var file of commandFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }

//client events
client.once('ready', () => {
console.log(`Logged in as ${client.user.tag}!`)
client.user.setPresence({ activity: { name: `Is a pokémon | ${client.guilds.size} servers | ${client.prefix}help` }, status: 'online' }) 
})
client.once("reconnecting", () => {
  console.log("Reconnecting!");
});
client.once("disconnect", () => {
  console.log("Disconnect!");
});

//set current game to resresh every minute (for server count)
setInterval(function(){
client.user.setPresence({ activity: { name: `Is a pokémon | ${client.guilds.size} servers | ${client.prefix}help` }, status: 'online' }) 
}, 60000);

//message time
client.on('message', async message =>{
 

 
 
    if (message.channel.type === "dm" || message.author.bot ||    message.author === client.user) return;
    if (!message.content.toLowerCase().startsWith(client.prefix) || !message.content.startsWith(`<@${client.user.id}> `) || !message.content.startsWith(`<@!${client.user.id}> `)) return;
   let totalargs = message.content.toLowerCase().startsWith(client.prefix) || message.content.startsWith(`<@${client.user.id}> `) || message.content.startsWith(`<@!${client.user.id}> `)
        const commandName = totalargs.toLowerCase().split(' ')[0].toLowerCase()
const args = message.content.slice(client.prefix.length || `<@${client.user.id}> `.length || `<@!${client.user.id}> `.length).split(' ').slice(1)
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases &&                       cmd.aliases.includes(commandName))
        if (!command) return;
        try {
         if (command.category === 'owner') {
          if (message.author.id !== client.ownerID) return message.reply("You tried to execute a owner-only command, and you can't do that :(")
         }
            command.execute(client,message,args,dbl)
         
        } catch (error) {
            console.log(error)
        }
    }
);

client.login(client.bot_token)

