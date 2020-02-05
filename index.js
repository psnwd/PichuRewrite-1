//Do not touch this
const Discord = require('discord.js')
const Client = require('./client/Client')
const newUsers = new Discord.Collection()
const path = require('path')
const client = new Client()
const fs = require('fs')

//
//
//
//Part to customize if you want to selfhost the bot
client.ownerID = process.env.ownerID //insert ID here
client.prefix = process.env.prefix //insert prefix here 
client.token = process.env.bot_token //insert bot token here
client.yt_api = process.env.yt_api_key //Youtube API key
//
//
//

//initializing commands here
client.commands = new Discord.Collection()
const queue = new Map()
 var commandFiles = fs
     .readdirSync(`./commands`)
    .filter(file => file.endsWith('.js'));

  for (var file of commandFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }

const { Player } = require("discord-player");
const player = new Player(client, client.yt_api);
client.player = player;


//client events
client.once('ready', () => {
console.log(`Logged in as ${client.user.tag}`)
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
 
 client.player.getQueue(message.guild.id)
.on('end', () => {
    message.channel.send('There is no more music in the queue!');
})
.on('songChanged', (oldSong, newSong) => {
    message.channel.send(`Now playing ${newSong.name}...`);
})
.on('channelEmpty', () => {
    message.channel.send('Stop playing, there is no more member in the voice channel...');
});
 
 
    if (message.channel.type === "dm" || message.author.bot ||    message.author === client.user) return;
    if (message.content.toLowerCase().startsWith(client.prefix)) {
        const commandName = message.content.slice(client.prefix.length).toLowerCase().split(' ')[0].toLowerCase()
const args = message.content.slice(client.prefix.length).toLowerCase().split(' ').slice(1)
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases &&                       cmd.aliases.includes(commandName))
        if (!command) return;
        try {
         if (command.category === 'owner') {
          if (message.author.id !== client.ownerID) return message.reply("You tried to execute a owner-only command, and you can't do that :(")
         }
            command.execute(client,message,args)
         
        } catch (error) {
            console.log(error)
        }
    }
});

client.login(client.token)

