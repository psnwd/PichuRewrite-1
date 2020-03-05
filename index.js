//Do not touch this
const Discord = require('discord.js')
const Client = require('./client/Client')
const newUsers = new Discord.Collection()
const path = require('path')
const client = new Client()
const fs = require('fs')

client.version = require('./package.json').version






//
//
//
//Part to customize if you want to selfhost the bot
client.ownerID = process.env.ownerID//insert ID here
client.prefix = pricess.env.prefix//insert prefix here 
client.bot_token = process.env.bot_token//insert bot token here
client.dbl_token = process.env.dbl_token
client.ksoftsi = process.env.ksoft-si
//
//
//

const DBL = require("dblapi.js");
const dbl = new DBL(client.dbl_token)





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
client.on('ready', () => {

  setInterval(() => {
    dbl.postStats(client.guilds.cache.size).then(console.log('Server count posted !'));
}, 1800000);

console.log(`Logged in as ${client.user.tag}!`)
client.user.setActivity(`Is a pokémon | ${client.guilds.cache.size} servers | ${client.prefix}help`) 
})
client.on("reconnecting", () => {
  console.log("Reconnecting!");
});
client.on("disconnect", () => {
  console.log("Disconnect!");
});

//set current game to resresh every minute (for server count)
setInterval(function(){
  client.user.setActivity(`Is a pokémon | ${client.guilds.cache.size} servers | ${client.prefix}help`) 
}, 60000);

let queue = new Map()

//message time
client.on('message', async message =>{

 
    if (!message.guild || message.channel.type === "dm" || message.author.bot || message.author === client.user) return;

    
    if (message.content.toLowerCase().startsWith(client.prefix)) {
        const commandName = message.content.slice(client.prefix.length).toLowerCase().split(' ')[0].toLowerCase()
const args = message.content.slice(client.prefix.length).split(' ').slice(1)
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases &&                       cmd.aliases.includes(commandName))
        if (!command) return;
        if (command.category === 'owner') {
          if (message.author.id !== client.ownerID) return message.reply("You tried to execute a owner-only command, and you can't do that :(")
         }
        try {
         
    
            await command.execute(client,message,args,dbl,queue)
         
        } catch (err) {
          let error = new Discord.MessageEmbed()
          .setColor('RED')
          .setAuthor('Oops! Soemthing went wrong!')
          .setDescription('Hi. An error happend during the execution of the **'+command.name+'** command. You should never get an error like that. Please contact Lumap#1049 with this error :')
          .addFields(
            { name: 'Error :', value: `\`\`\`js\n${err}\`\`\``})
          message.reply(error)
            console.log(err)
        }
    }
});

client.login(client.bot_token)

