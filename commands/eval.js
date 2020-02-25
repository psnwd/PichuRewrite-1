 function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

const Discord = require('discord.js')

module.exports = {
  name: 'eval',
  description: 'Eval something',
  category: 'owner',
  execute(client,message,args) {
   try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      const successembed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('Pichu eval command results :')
      .addField('Ipnut :',args)
      .addField('Output :', clean(evaled), {code: 'js'})
      message.react('✅').then(message.channel.send(successembed));
    } catch (err) {
      const failureembed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('Pichu eval command results :')
      .addField('Ipnut :',args)
      .addField('Error :', clean(err), {code: 'js'})
      message.react('✖️').then(message.channel.send(failureembed));
    }
  },
};
