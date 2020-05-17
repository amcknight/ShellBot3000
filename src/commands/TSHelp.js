const TSCommand = require('../TSCommand.js');

class TSHelp extends TSCommand {
  constructor() {
    super('help', {
      aliases: ['help', 'commands', 'command', 'man', '?'],
      args: [
        {
          id: 'command',
          type: 'string',
          default: null,
        },
      ],
      channelRestriction: 'guild',
    });
  }

  async tsexec(ts, message) {
    await message.reply(ts.message('help.basic'));
  }
}
module.exports = TSHelp;