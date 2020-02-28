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
client.ownerID = process.env.ownerID //insert ID here
client.prefix = process.env.prefix //insert prefix here 
client.bot_token = process.env.bot_token //insert bot token here
client.dbl_token = process.env.dbl_token
client.ksoftsi = process.env.ksoftsi_token
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
let prefixlist = [client.prefix, `<@${client.user.id}> `, `<@!${client.user.id}> `]
for (let i = 0; i !== prefixlist.length; i++) {
  if (!message.content.toLowerCase().startsWith(prefixlist[i])) {return}
  else {let args = message.content.slice(prefixlist[i].length).split(' ').slice(1)
  let commandName = message.content.slice(prefixlist[i].length).split(' ')[0]
     const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
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
    }
  }
);

client.login(client.bot_token)

