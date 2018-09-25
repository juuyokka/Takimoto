const settings = require('./../settings.json');

import * as dotenv from "dotenv"
dotenv.config();
import path from "path";

import Discord from 'discord.js';
import Commando from 'discord.js-commando';
const client = new Commando.CommandoClient({
	commandPrefix: settings.botPrefix,
	owner: settings.botOwnerID,
	unknownCommandResponse: false,
	disableEveryone: true
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['fun', 'Fun Command Group'],
		['tools', 'Tools Command Group']
	])
	.registerCommandsIn(path.join(__dirname, 'commands'));

console.log(`Attempting to log in with token: ${process.env.BOT_TOKEN}`);

client.on('ready', () => {
	console.log(`Successfully logged in as ${client.user.tag}!`);
	client.user.setActivity('Sojiro 👀', { type: 'WATCHING' });
});

client.on('message', (message) => {
	if (message.mentions.users.get(client.user.id))
	  message.react('👀');
  });

client.login(process.env.BOT_TOKEN);