import { Command, CommandoClient, CommandMessage } from 'discord.js-commando';

module.exports = class ping extends Command {
	constructor(client: CommandoClient) {
		super(client, {
			name: 'ping',
			group: 'fun',
			memberName: 'ping',
			description: 'Replies with pong',
			examples: ['ping']
		});
	}
	
	run(msg: CommandMessage) {
		return msg.reply('Pong! :ping_pong:');
	}
}