const TSCommand = require('../TSCommand.js');
class housekeep extends TSCommand {
    constructor() {
        super('housekeep', {
            aliases: ['housekeep'],
            ownerOnly: true,
            category: 'owner'
        });
    }

    async tsexec(ts,message, args) {
        await ts.load()
        let guild=ts.getGuild();
        let housekept=0;
        for(let i=0;i<guild.channels.length;i++){
            let channel=guild.channels[i]
            if(channel.parentID==ts.channels.levelDiscussionCategory){
                const code=channel.name.toUpperCase()
                let deleteLevel=false,reason="";
                let currentLevel=await ts.getLevels().where({code})
                if(currentLevel){
                    if(currentLevel.status!==ts.LEVEL_STATUS.PENDING){
                        deleteLevel=true
                        reason="Level not pending anymore"
                    }
                } else {
                    deleteLevel=true
                    reason="No level found in list"
                }
                if(deleteLevel){
                    await ts.deleteDiscussionChannel(code,reason)
                    housekept++
                }
            }
        };
        await message.reply("Housekeeping done")
    }
}

module.exports = housekeep;