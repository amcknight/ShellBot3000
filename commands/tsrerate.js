const TSCommand = require('../TSCommand.js');
class TSRerate extends TSCommand {
    constructor() {
        super('tsrerate', {
           aliases: ['tsrerate', 'rerate'],
           split: 'quoted',
            args: [{
              id: 'code',
              type: 'uppercase',
              default: null,
            },
            {
              id: 'difficulty',
              type: 'number',
              default: null,
            },
            {
              id: 'reason',
              type: 'string',
              default: null,
            }],
           channelRestriction: 'guild'
        });
    }

    async tsexec(ts,message,{ code , difficulty, reason }) {
      if(!(
        message.channel.id === ts.channels.modChannel 
      )) return false;

      if(code){
        code = code.toUpperCase();
      } else {
        ts.userError(ts.message('error.noCode'))
      }

      //Check all the args first
      if(!difficulty) ts.userError('difficulty.noDifficulty')
      if(!ts.valid_difficulty(difficulty)) ts.userError("Invalid difficulty format!");
      if(!reason) ts.userError('difficulty.noReason');

      const level=await ts.getExistingLevel(code,true);
      if(level.status!== ts.LEVEL_STATUS.APPROVED){
        ts.userError('error.notApproved');
      }

      
      
      const author = await ts.db.Members.query().where({name:level.creator}).first();

      if(level.difficulty==difficulty) ts.userError("\""+level.level_name+"\" is already rated "+difficulty);

      await ts.db.Levels.query().patch({difficulty}).where({code})

      await ts.recalculateAfterUpdate({code})

      var rerateEmbed = ts.levelEmbed(level,ts.embedStyle.rerate,{ 
            old_difficulty:level.difficulty,
            new_difficulty:difficulty,
          })
          .addField("\u200b","**Reason** :\n```"+reason+"```Rerated by <@" +message.member.id + ">")

      var levelChangeChannel=await this.client.channels.get(ts.channels.levelChangeNotification)

      var mention = "**<@" + author.discord_id + ">, we got some news for you: **";
      await levelChangeChannel.send(mention);
      await levelChangeChannel.send(rerateEmbed);
      await message.reply(ts.message('difficulty.success'));
  }
}
module.exports = TSRerate;