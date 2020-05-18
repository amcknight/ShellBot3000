const TSCommand = require('../TSCommand.js');

class TSFixApprove extends TSCommand {
  constructor() {
    super('tsfixapprove', {
      aliases: [
        'tsfixapprove',
        'tsfixreject',
        'fixapprove',
        'fixreject',
      ],
      split: 'quoted',
      args: [
        {
          id: 'reason',
          type: 'string',
          default: null,
        },
      ],
      channelRestriction: 'guild',
    });
  }

  async tsexec(ts, message, { reason }) {
    /*
        Possible command syntax:
        !tsapprove code difficulty reason
        !tsreject code reason

        in channel
        !tsapprove difficulty reason
        !tsreject reason
      */
    const command = ts.parse_command(message);
    let inReuploadChannel = false;
    let code = '';

    // Check if in level discussion channel
    if (ts.valid_code(message.channel.name.toUpperCase())) {
      inReuploadChannel = true;
      code = message.channel.name.toUpperCase();
    } else {
      // Check the code only if not in discussion channel
    }
    if (!inReuploadChannel) return false; // silently fail

    if (
      message.channel.parentID !== ts.channels.pendingReuploadCategory
    )
      ts.userError(ts.message('fixApprove.notInChannel', { code }));

    let approving = false;

    if (
      command.command === 'tsfixapprove' ||
      command.command === 'fixapprove'
    ) {
      approving = true;
    }

    let replyMessage = '';
    if (reason) {
      replyMessage = await ts.finishFixRequest(code, message.author, reason, approving);
    } else {
      ts.userError(ts.message('fixApprove.noReason'));
    }
  }
}
module.exports = TSFixApprove;
