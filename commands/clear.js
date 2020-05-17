const TSCommand = require('../TSCommand.js');

class TSClear extends TSCommand {
  constructor() {
    super('tsclear', {
      aliases: ['tsclear', 'clear'],
      args: [
        {
          id: 'code',
          type: 'uppercase',
          default: null,
        },
        {
          id: 'difficulty',
          type: 'string',
          default: null,
        },
        {
          id: 'liked',
          type: 'string',
          default: null,
        },
      ],
      channelRestriction: 'guild',
    });
  }

  async tsexec(ts, message, args) {
    args.discord_id = message.author.id;
    args.completed = 1;
    const msg = await ts.clear(args);
    await message.channel.send(msg);
  }
}
module.exports = TSClear;
