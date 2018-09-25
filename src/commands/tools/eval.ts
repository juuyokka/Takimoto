import { Command, CommandoClient, CommandMessage, Argument } from 'discord.js-commando';
const settings = require('./../../../settings.json');

module.exports = class ping extends Command {
	constructor(client: CommandoClient) {
		super(client, {
			name: 'eval',
			group: 'tools',
			memberName: 'eval',
			description: 'Evaluates message as code',
			examples: ['eval 2 + 2'],
			args: [
					{
						key: 'code',
						prompt: 'What would you like to evaluate?',
						type: 'string',
            default: ''
					}
				]
			});
		}
  
  run(msg: CommandMessage, { code }: {code: string}) {
    if (msg.author.id != settings.botOwnerID) {
      return msg.reply('You must be the bot owner to use this command.');
    }
    try {
      var res = eval(code);
    }
    catch(err) {
      return msg.reply(err.message);
    }
    return msg.say(`\`\`\`${res}\`\`\``);
  }
}