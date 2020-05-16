const TSCommand = require('../TSCommand.js');
class tsinfo extends TSCommand {
    constructor() {
        super('tsinfo', {
           aliases: ['tsinfo','info','level'],
            args: [{
                    id: 'code',
                    type: 'uppercase',
                    default: null
                }],
           channelRestriction: 'guild'
        });
    }

    async tsexec(ts,message,{code}) {
      if(!code) ts.userError('error.noCode')
      code=code.toUpperCase();
      const player=await ts.get_user(message);
      var level=await ts.getExistingLevel(code)

      var randomEmbed=ts.levelEmbed(level)

      await message.channel.send(player.user_reply)
      await message.channel.send(randomEmbed)
    }
}
module.exports = tsinfo;