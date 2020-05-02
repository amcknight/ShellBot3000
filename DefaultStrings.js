module.exports={
  //website json api
 'website.loggedin':'Your account was logged in on the website.',
 'website.tokenError':'Token expired. Need to relogin',
 'website.authError':'Authentication error',
 'website.noToken':'No token sent',

 'api.noslug':'No url_slug found',
 'api.slugNotFound':'url slug provided was not found',

 'feedback.noMessage':'No message was sent!',
 'feedback.tooLong':'The supplied message is too long, please keep it lower than 1000 characters!',

 'login.invalidToken':'Your one time password was incorrect. You can DM {{BotName}} with !login to get another code',
 'login.expiredOTP':'The OTP password given is already expired',
 'login.noOTP':'No OTP provided',

 'level.didYouMean':' Did you mean:```\n{{{level_info}}}```', //✅

 'error.noDiscordId':'We couldn\'t find your `discord id',
 'clear.noArgs':'There were no arguments in the request',
 'clear.invalidDifficulty':'You did not provide a valid difficulty vote', //✅
 'clear.ownLevel':'You can\'t submit a clear for your own level', //✅
 'clear.removedClear':'You have removed your clear for {{{levelInfo}}}', //✅
 'clear.addClear':' ‣You have cleared {{{levelInfo}}} {{{GG}}}', //✅
 'clear.earnedPoints':' ‣You have earned {{earned_points}} points', //✅
 'clear.pendingLevel':' ‣This level is still pending', //✅
 'clear.alreadyUncleared':' ‣You have not submited a clear for {{{levelInfo}}}',
 'clear.alreadyCleared':' ‣You have already submitted a clear for {{{levelInfo}}}',
 'clear.removeDifficulty':'‣You have removed your difficulty vote for {{{levelInfo}}} {{{bam}}}',
 'clear.addDifficulty':' ‣You have voted {{difficulty_vote}} as the difficulty for {{{levelInfo}}} {{{bam}}}',
 'clear.alreadyDifficulty':' ‣You haven\'t submitted a difficulty vote for {{{levelInfo}}} {{{think}}}',
 'clear.alreadyNoDifficulty':' ‣You have already voted {{difficulty_vote}} for {{{levelInfo}}} {{{think}}}',
 'clear.removeLike':'‣You have unliked {{{levelInfo}}} {{{bam}}}',
 'clear.addLike':' ‣You have liked {{{levelInfo}}} {{{love}}}',
 'clear.alreadyLiked':' ‣You have not added a like for {{{levelInfo}}} {{{think}}}',
 'clear.alreadyUnliked':' ‣You have already liked {{{levelInfo}}} {{{love}}}',
 'clear.singleHave':'‣You have',
 'clear.manyHave':'‣You also have',
 'clear.levelPronoun':'this level',
 'clear.levelInfo':'\'{{{level.level_name}}}\'  by {{{creator}}}', //creator is either string or @discord name

 'random.embedTitle':'{{BotName}} rolled a d97 and found this level for you',
 'random.embedTitlePlayers':'{{BotName}} rolled a d97 and found this level for {{players}}',
 'random.noMinDifficulty':'You didn\'t specify a valid minimum difficulty',
 'random.noDifficulty':'You didn\'t specify a valid difficulty',
 'random.noMaxDifficulty':'You didn\'t specify a valid maximum difficulty',
 'random.playerNotFound':'{{player}} is not found in the memory banks',
 'random.outOfLevels':'You have ran out of levels in this range ({{range}})',

 'approval.invalidDifficulty':"Invalid difficulty format!",
 'approval.judgementBegin':'The Judgement  has now begun for this level:',
 'approval.approvalVotes':'__Current Votes for approving the level:__\n',
 'approval.noVotes':'> None\n',
 'approval.fixVotes':'\n__Current Votes for fixing the level:__\n',
 'approval.rejectVotes':'\n__Current votes for rejecting the level:__\n',
 'approval.changeReason':'You need to give a reason for the change (in quotation marks)!',
 'approval.creatorNotFound':'Author was not found in Members List!',
 'approval.levelAlreadyApproved':'Level is already approved!',
 'approval.levelNotPending':'Level is not pending!',
 'approval.tooManyDiscussionChannels':'Your vote is saved but there are 50 discussion channels active right now so we can\'t make a new one for this level',
 'approval.voteChanged':'Your vote was changed in <#{{channel_id}}>!',
 'approval.voteAdded':'Your vote was added to <#{{channel_id}}>!',
 'approval.fixPlayerInstructions':'This level is one step from being approved, we\'d just like to see some fixes!',
 'approval.comboBreaker':'The votes are the same! {{buzzyS}} We need a tiebreaker',
 'approval.numVotesNeeded':'The necessary amount of reject/approval votes has not been reached yet!',
 'approval.fixInstructionsCreator':'If you want to fix these issues use **!reupload** (to get it approved really quickly) or if you don\'t want to just use **!refusefix** and the mods will decide if it\'s still acceptable.',
 'approval.channelDeleted':'Justice has been met!',
 'approval.rejectAfterRefuse':'We\'re really sorry, but this level was rejected after you refused to reupload.',

 'judge.levelRejected':'Sorry, this level didn\'t quite make the cut for {{TeamName}}, but feel free to use the advice below to improve your level and resubmit it to us at later time',
 'judge.levelRemoved':'Level was removed!',
 'judge.approved':"This level was approved for difficulty: {{difficulty}}!",
 'judge.votedApprove':'{{player}} voted for approval with difficulty {{difficulty_vote}}:',
 'judge.votedReject':'{{player}} voted for rejection:',
 'judge.votedFix':'{{player}} voted for fix with difficulty {{difficulty_vote}}:',

 'reupload.invalidOldCode':'You did not provide a valid code for the old level',
 'reupload.invalidNewCode':'You did not provide a valid code for the new level',
 'reupload.sameCode':'The codes given were the same', //✅
 'reupload.giveReason':'Please provide a little message on why you reuploaded at the end of the command (in quotes)',
 'reupload.differentCreator':'The new level uploaded doesn\'t have the same creator as the old level',
 'reupload.wrongApprovedStatus':'The new level is not approved, pending or in a fix request',
 'reupload.notEnoughPoints':'Creator doesn\'t have enough points to upload a new level',
 'reupload.haveReuploaded':'Level has already been reuploaded with Code {{code}}',
 'reupload.noPermission':'You can\'t reupload \'{{{level.level_name}}}\' by {{level.creator}}',
 'reupload.tooManyReuploadChannels':'Can\'t handle the request right now because there are already 50 open reupload requests (this should really never happen)!',
 'reupload.reuploadNotify':'This level has been reuploaded from {{old_code}} to {{new_code}}. Below are the comments of the old level',
 'reupload.success':'You have reuploaded \'{{{level.level_name}}}\' by {{level.creator}} with code `{{new_code}}. {{{bam}}}',
 'reupload.renamingInstructions':' If you want to rename the new level, you can use !rename new-code level name.',
 'reupload.inReuploadQueue':' Your level has also been put in the reupload queue, we\'ll get back to you shortly.',

 'initiation.message':'We welcome <@{{discord_id}}> to our team!',
 'initiation.userNotInDiscord':'{{name}} was not found in {{TeamName}}\'s discord',

 'general.heyListen':'**<@{{discord_id}}>, we got some news for you: **',

 'pending.pendingTitle':'This level has been reuploaded and is now awaiting approval!',
 'pending.alreadyApprovedBefore':'This level was already approved before so if everything\'s alright you can approve it (use **!fixapprove**)',
 'pending.refuseTitle':'This level has NOT been reuploaded!',
 'pending.reuploadedTitle': 'This level has been reuploaded and is now awaiting a decision!',
 'pending.refuseDescription':'Refused by: Please check the fixvotes and decide if this is still acceptable to approve or not (use **!fixapprove** or **!fixreject** with a message).',
 'pending.fixReuploadDescription':'Please check if the mandatory fixes where made and make your decision (use **!fixapprove** or **!fixreject** with a message).',

 'removeLevel.cant':'You can\'t remove videos from  "{{{level_name}}}" by {{{creator}}}',//✅
 'removeLevel.success':'You have removed "{{{level_name}}}" by {{{creator}}} {{{buzzyS}}}',//✅
 'removeLevel.noReason':"You did not provide a reason to remove this level. If you want to reupload, we recommend using the `!reupload` command. If you want to remove it now and reupload it later make sure __you don't lose the old code__",//✅
 'removeLevel.alreadyRemoved':'"{{{level_name}}}" by {{{creator}}} has already been removed',//✅

 'error.notApproved':'Level is not approved',
 'error.userBanned':'You have been barred from using this service',//✅
 'error.notRegistered':'You are not yet registered',//✅
 'error.emptyLevelList':'No levels found buzzyS',
 'error.afterUserDiscord':' {{{think}}}',
 'error.afterUserWeb':'',
 'error.levelNotFound':'The code {{code}} was not found in {{TeamName}}\'s list.',
 'error.levelIsFixing':'The level \'{{{level.level_name}}}\' is under \'Request to fix\' status',
 'error.levelIsRemoved':'The level \'{{{level.level_name}}}\'  has been removed from {{TeamName}}\'s list',
 'error.unknownError':'something went wrong buzzyS',
 'error.noCode':'You did not give a level code',
 'error.invalidCode':'You did not provide a valid level code',
 'error.invalidMakerCode':'`{{code}}` is not a valid maker id',

 'points.points':'You have {{player.earned_points.clearPoints}} clear points. You have submitted {{player.earned_points.levelsMade}} level(s) {{#if player.earned_points.freeSubmissions}} ({{player.earned_points.freeSubmissions}} free submission(s)){{/if}}.',  //✅
 'points.canUpload':'You have enough points to upload a level {{{PigChamp}}}',
 'points.cantUpload':'You need {{points_needed}} points to upload a new level {{{buzzyS}}}. Check how the points are mapped on {{teamurl}}',
 'points.rank':' You have earned the rank **{{player.rank.Rank}}** {{{player.rank.Pips}}}',  //✅

 'difficulty.updated':'Difficulty rating updated from {{old_difficulty}} - {{new_difficulty}}',//✅
 'difficulty.success':'Difficulty was successfully changed!',//✅
 'difficulty.noReason':'You need to give a reason for the change (in quotation marks)!',//✅

 'add.noName':'You didn\'t give a level name', //✅
 'add.levelExisting':'`{{level.code}}` has already been submitted as \'{{{level.level_name}}}\' by {{level.creator}}',//✅
 'add.success':'The level {{{level_name}}} ({{code}}) has been added {{{love}}}',//✅

 'tags.noTags':'You didn\'t give any tags',  //✅
 'tags.cantAdd':'You can\'t add the tag \'{{tag}}\'',

 'register.already':'You\'re already registered as **{{name}}**',//✅
 'register.nameTaken':'\'{{name}}\' has already been registered by someone else. Please use another nickname',//✅
 'register.success':'You are now registered as \'{{name}}\'. You can now start submitting your clears in #level-clears {{{bam}}}',//✅

 'login.reply':' You have requested a login token for the website. click the link below to login.:\n <{{login_link}}> {{{bam}}}\n If you\'re on mobile, copy the link and paste it into your preferred browser app. If you open this link in an in-app browser, your login might not be saved properly. {{{buzzyS}}}\n This token will only be valid for 30 minutes',

 'makerid.noCode':'You didn\'t provide any maker code',//✅
 'makerid.noName':'You didn\'t provide your maker name',//✅
 'makerid.success':'You have updated your maker-id to {{code}} and maker-name to {{name}} {{{bam}}}',//✅
 'makerid.existing':'`{{code}} is already being used by \'{{name}}\' ',//✅
 'makerid.already':'`{{code}}` is already what you have set for your maker-id ',//✅

 'setworld.invalidWorldCount':'You didn\'t provide a valid world count',//✅
 'setworld.invalidLevelCount':'You didn\'t provide a valid level count',//✅
 'setworld.noWorldName':'You didn\'t provide a world name',//✅
 'setworld.success':'Your world was successfully set and should now show up on the worlds page',//✅
 'setworld.noMakerId':'You need to set your Maker ID and Name first with !makerid XXX-XXX-XXX Name',//✅



 'unsetworld.success':'Your world was successfully removed',//✅

 'atme.already':'You already have chosen to be atted',//✅
 'atme.willBe':'You will be atted by {{BotName}} {{{bam}}}',//✅
 'atme.alreadyNot':'You already have chosen not to be atted', //✅
 'atme.willBeNot':'You will not be atted by {{BotName}} {{{bam}}}',//✅

 'ammendCode.success':'The level "{{{level.level_name}}}", by {{level.creator}}, has changed code from `{{old_code}}` to `{{new_code}}`',


 'help.basic':'You can find all the commands at <https://makerteams.net/features>',
 'mock.userSuccess':"You're now {{name}}. Identity theft is not a joke, Jim!", //✅


}