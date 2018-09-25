const prefix: string = 't$';
const owner: string = '399345739941150720';

import * as dotenv from "dotenv"
dotenv.config();
import path from "path";

import Discord from 'discord.js';
import Commando from 'discord.js-commando';
const client = new Commando.CommandoClient({
	commandPrefix: prefix,
	owner: owner,
	unknownCommandResponse: false,
	disableEveryone: true
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['fun', 'Fun Command Group']
	])
	.registerCommandsIn(path.join(__dirname, 'commands'));

console.log(`Attempting to log in with token: ${process.env.BOT_TOKEN}`);

client.on('ready', () => {
	console.log(`Successfully logged in as ${client.user.tag}!`);
	client.user.setActivity('Sojiro 👀', { type: 'WATCHING' });
});

client.login(process.env.BOT_TOKEN);