const Discord = require('discord.js');
const fs = require('fs');
 const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

function problemSolve(value, index, array) {
	console.log(index + ' : ' + value);
}

function promiseFailed() {
	console.log(`This promise failed...`);
}

client.on('message', msg => {
	console.log(`Message: received...\t`+msg.content);
	if (msg.content === 'ping') {
 		msg.reply('pong');
	} else if (msg.content == 'whisper') {
		msg.reply(`I'll get back to you ;-P`);
		msg.author.createDM().then(function(dm) { dm.send(`Don't tell everyone! Ssh! ;-P\nI know you are using `+msg.author.presence.activities[0].name+` :-O\nI also know your status is `+msg.author.presence.status); dm.delete(); }, promiseFailed);
	}
});

console.log("Reading bot key from file system");
var botKey = fs.readFileSync('bot_key.dat', 'utf8');
botKey = botKey.slice(0, botKey.length-1);	//Remove a newline added by the file reading API

client.login(botKey)
	.then(function () { console.log("Login successful!"); })
	.catch(function () { console.log("Login failed!"); } );
