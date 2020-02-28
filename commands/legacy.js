const request = require('request-promise')
const { Command } = require('discord-akairo');
const channels = require('../channels.json');
const emotes = require('../emotes.json');
const config = require("../config.json");


var Shellbot2000Commands={
  "register":"register",
  "atmebot":"atme",
  "dontatmebot":"dontatme",
  "tsclear":"clear",
  "tsdifficulty":"difficulty",
  "tsremovelevel":"removelevel",
  "tsremoveclear":"removeclear",
  "tslike":"like",
  "tsunlike":"unlike",
  "tsrename":"rename",
  "addtags":"addtags",
  "removetags":"removetags",
  "addvids":"addvods",
  "removevids":"removevods",
  "tsadd":"add"
}

var ssb2000_commands=Object.keys(Shellbot2000Commands)

class LegacyCommands extends Command {
    constructor() {
        super('legacy', {
           aliases: ssb2000_commands,
           channelRestriction: 'guild'
        });
    }
    
    async exec(message,args) {     
        // if(!( 
        //    message.channel.id === channels.botTest1  //only in bot-test channel
            //&& message.member.roles.exists(role => role.name === 'Shellder')  //only shellder
        //)) return false;
        try {
          
          var raw_command=message.content.trim()
          raw_command=raw_command.split(" ")
          var sb_command=raw_command.shift().toLowerCase().substring(1)
          raw_command=raw_command.join(" ")

          var username=encodeURIComponent(message.author.username)
          var discord_id=message.author.id
          sb_command=Shellbot2000Commands[sb_command]
          sb_command+="|"+raw_command
          var parameter=encodeURIComponent(username+"|"+discord_id+"|"+encodeURI(sb_command))
          var url=config.shellbot2000+parameter
          const response=await request({
              url: url,
              method: 'GET',
              gzip: true 
          })
          if(response.length>400) throw response
          message.channel.send(response)
        } catch(error){
          console.error(error)
          message.reply("Something went wrong "+emotes.buzzyS)
        }
      }
}
module.exports = LegacyCommands;