const TSCommand = require('../TSCommand.js');
class TSRemoveclear extends TSCommand {
    constructor() {
        super('tsremoveclear', {
           aliases: ['tsremoveclear',"removeclear"],
            args: [{
                    id: 'code',
                    type: 'string',
                    default: ''
                }],
           channelRestriction: 'guild'
        });
    }

    async tsexec(ts,message,args) {
      args.completed=0
      args.discord_id=message.author.id
      let msg=await ts.clear(args)
      message.channel.send(msg)
    }
}
module.exports = TSRemoveclear;