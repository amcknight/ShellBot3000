const TSCommand = require('../TSCommand.js');

class mockUser extends TSCommand {
  constructor() {
    super('mockUser', {
      aliases: ['mockUser'],
      split: 'quoted',
      args: [
        {
          id: 'user',
          type: 'string',
          default: null,
        },
      ],
    });
  }

  async canRun() {
    return process.env.NODE_ENV !== 'production';
  }

  async tsexec(ts, message, args) {
    if (!args.user) ts.userError('mock.noTargetGiven');
    const player = await ts.get_user(message);
    const target = await ts.db.Members.query()
      .where({ name: args.user })
      .first();

    if (!target) ts.userError('mock.notFound');
    if (target.name == player.name) ts.userError('mock.already');

    await ts.db.Members.query()
      .patch({ discord_id: player.discord_id_temp || '1' })
      .where({ discord_id: message.author.id });

    await ts.db.Members.query()
      .patch({
        discord_id: message.author.id,
        discord_id_temp: target.discord_id,
      })
      .where({ name: target.name });

    const p = await ts.get_user(message);
    await message.channel.send(
      ts.message('mock.userSuccess', { name: p.name }),
    );
  }
}
module.exports = mockUser;