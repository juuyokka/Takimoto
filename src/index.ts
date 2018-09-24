import * as dotenv from "dotenv"
dotenv.config();

import Discord from 'discord.js';
const client = new Discord.Client();

console.log(`Attempting to log in with token: ${process.env.BOT_TOKEN}`);

client.on('ready', () => {
    console.log(`Successfully logged in as ${client.user.tag}!`);
    client.user.setActivity('Sojiro 👀', { type: 'WATCHING' });
});

// client.on('message', msg => {
    
// });

client.login(process.env.BOT_TOKEN);