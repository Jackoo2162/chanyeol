const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('message', message => {
  if (message.content === 'nico nico ni') {
   // message.reply('pong');
    message.channel.sendMessage('annyeong');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"SLEEPING"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('message', message => {
  if (message.content === 'you') {
   // message.reply('pong');
    message.channel.sendMessage('You just want attention!');
  }
});


bot.on('message', message => {
  if (message.content === 'U') {
   // message.reply('pong');
    message.channel.sendMessage('U got me thinking about when you were mine');
  }
});

bot.on('message', message => {
  if (message.content === 'ok') {
   // message.reply('pong');
    message.channel.sendMessage('Should come home with me tonight');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});



bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'CHANYEOL');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});


// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.login('NDA4MTY3OTIxMDc3MTkwNjU2.DVMRCA.MuPSP2QhcT1MH_QKfjokDZa1MPs');
