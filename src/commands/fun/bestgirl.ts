import { Command, CommandoClient, CommandMessage } from "discord.js-commando";

module.exports = class bestGirl extends Command {
	constructor(client: CommandoClient) {
		super(client, {
			name: 'bestgirl',
			group: 'fun',
			memberName: 'bestgirl',
			description: 'Shows who\'s best girl',
			examples: ['bestgirl']
		});
	}

	run(msg: CommandMessage) {
		return msg.say('', {file: './assets/hifumi.jpg'});
	}
}