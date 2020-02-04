module.exports = {
    name: 'reload',
    description: 'Reloads a command',
    category: 'owner',
    execute(client,message,args) {
if (message.user.id!==client.ownerID) return message.reply("You are not supposed to do this!") 
        if (!args) return;
      const commandName = args;
  if(!client.commands.has(commandName)) {
    return message.reply("That command does not exist");
  }
  delete require.cache[require.resolve(`./${commandName}.js`)];
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`The command ${commandName} has been reloaded`);
},
};
 
