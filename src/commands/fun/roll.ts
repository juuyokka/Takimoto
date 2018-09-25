import { Command, CommandoClient, CommandMessage, Argument } from 'discord.js-commando';

module.exports = class ping extends Command {
	constructor(client: CommandoClient) {
		super(client, {
			name: 'roll',
			group: 'fun',
			memberName: 'roll',
			description: 'Rolls up to max number',
			examples: ['roll 6'],
			args: [
					{
						key: 'max',
						prompt: 'What number would you like to roll to?',
						type: 'string',
						default: '6'
					}
				]
			});
		}
    
	run(msg: CommandMessage, { max }: {max: string}) {
		let value = Number(max);
		if (value === NaN || value <= 0 || value % 1 != 0)
			return msg.reply('value must be a positive integer');
		else {
			let rand = Math.random();
			return msg.reply(Math.ceil(rand * value));
		}
	}
}