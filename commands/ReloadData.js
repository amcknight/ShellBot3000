const TSCommand = require('../TSCommand.js');
const config = require('../config.json')[process.env.NODE_ENV || 'development']

class ReloadData extends TSCommand {
    constructor() {
        super('refresh', {
            aliases: ['refresh'],
            channelRestriction: 'guild'
        });
    }

    async canRun(ts,message){
        if(config.ownerID && config.ownerID.indexOf(message.author.id)!==-1){
            return true;
        }
        if(config.devs && config.devs.indexOf(message.author.id)!==-1){
            return true;
        }
        
        const member=await ts.db.Member.query().where({discord_id:message.author.id}).first()
        if(member && member.is_mod){
            return true
        }
        return false;
    }
    

    async tsexec(ts,message, args){
        await ts.saveSheetToDb()
        await ts.load()
        return await message.reply(`Reloaded data!`);
    }
}

module.exports = ReloadData;