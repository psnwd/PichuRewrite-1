//Do not touch this
const Discord = require('discord.js')
const Client = require('./client/Client')
const newUsers = new Discord.Collection()
const path = require('path')
const client = new Client()
const fs = require('fs')
const http = require('http')
const express = require('express')
const app = express()

app.get("/", (request, response) => {
  response.send("u found this !")
});


client.version = require('./package.json').version



setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.herokuapp.com/`);
}, 280000);



//
//
//
//Part to customize if you want to selfhost the bot
client.ownerID = process.env.ownerID//insert ID here 
client.bot_token = process.env.bot_token//insert bot token here
client.dbl_token = process.env.dbl_token
client.prefix = process.env.prefix
client.ksoftsi = process.env.ksoftsi_token
client.pichuApiPassword = process.env.pichuApiPassword
//
//
//




const DBL = require("dblapi.js");
const dbl = new DBL(client.dbl_token, { webhookPort: process.env.PORT, webhookAuth: 'password' })


dbl.webhook.on('posted', () => {
  console.log('Server count posted!');
})

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});

dbl.webhook.on('error', e => {
  console.log(`Oops! ${e}`);
})

dbl.webhook.on('vote', vote => {
  user = client.users.cache.get(vote.user)
  client.channels.cache.get('685971547315240969').send(new Discord.MessageEmbed().setColor('RANDOM').setThumbnail(user.avatarURL({ format: 'png', dynamic: true, size: 2048 })).setDescription(`Thanks you for voting <@${user.id}> (**${user.id}**)! As a reward, you get... Respect lol`))
});


//initializing commands here
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.categories = require("fs").readdirSync("./commands/")

for (let i = 0; i < client.categories.length; i++) {
  var commandFiles = fs
    .readdirSync(`./commands/${client.categories[i]}`)
    .filter(file => file.endsWith('.js'));
  for (var file of commandFiles) {
    var command = require(`./commands/${client.categories[i]}/${file}`);
    client.commands.set(command.name, command);
    if (command.aliases && Array.isArray(command.aliases)) command.aliases.forEach(alias => client.aliases.set(alias, command.name));
  }  //just added aliases
}
//client events

client.snipes = new Discord.Collection()

client.on('messageDelete', (message) => {
  if (!message.guild || message.channel.type === "dm" || message.author.bot || message.author === client.user) return;
  client.snipes.set(message.channel.id, {
    content: message.content,
    user: message.author
  })
}) //im gonna make a file which you can use like a node module
client.on('ready', () => {

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
setInterval(function () {
  client.user.setActivity(`Is a pokémon | ${client.guilds.cache.size} servers | ${client.prefix}help`)
}, 60000);

let queue = new Map()
let messagecounter = [0, 0] //[0] is messages seen, [1] is commands used
//message time
client.on('message', async message => {
  messagecounter[0] += 1
let prefix = '' 
  if (!message.guild || message.channel.type === "dm" || message.author.bot || message.author === client.user) return;
  require('axios').post('https://pichu-api.glitch.me/database/prefixes/get', {password: client.pichuApiPassword, key: message.guild.id}).then(res => {
    if (res.data) {prefix = res.data} else {prefix = client.prefix}
  })
  if (message.content.match(`^<@!?${client.user.id}>`)) return message.channel.send(`My prefix is \`\`${prefix}\`\`!`)
  if (message.content.toLowerCase().startsWith(prefix)) {
    const commandName = message.content.slice(client.prefix.length).toLowerCase().split(' ')[0].toLowerCase()
    const args = message.content.slice(prefix.length).split(' ').slice(1)
    const command = client.commands.get(commandName)
      || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (!command) return;
    if (command.category === 'owner') {
      if (message.author.id !== client.ownerID) return message.reply("You tried to execute a owner-only command, and you can't do that :(")
    }
    try {

      messagecounter[1] += 1
      await command.execute(client, message, args, dbl, queue, messagecounter)

    } catch (err) {
      let error = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor('Oops! Something went wrong!')
        .setDescription('Hi. An error happend during the execution of the **' + command.name + '** command. You should never get an error like that. Please contact Lumap#1049 with this error :')
        .addFields(
          { name: 'Error :', value: `\`\`\`js\n${err}\`\`\`` })
      message.reply(error)
      console.log(err)
    }
  }
});

client.login(client.bot_token)

