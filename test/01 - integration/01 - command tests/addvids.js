describe('!add/remove vids', () => {
  before(async () => {
    await TEST.setupData({
      Members: [
        {
          name: 'Mod',
          discord_id: '128',
          is_mod: 1,
        },
        {
          name: 'Creator',
          discord_id: '256',
        },
        {
          name: 'Other',
          discord_id: '512',
        },
        {
          name: 'Other2',
          discord_id: '1024',
        },
      ],
      Levels: [
        {
          level_name: 'approved level',
          creator: 2,
          code: 'XXX-XXX-XXX',
          status: 1,
          difficulty: 1,
        },
        {
          level_name: 'pending level',
          creator: 2,
          code: 'XXX-XXX-XX2',
          status: 0,
          difficulty: 0,
          videos: 'https://youtube.com,https://twitch.tv',
        },
        {
          level_name: 'approved level',
          creator: 2,
          code: 'XXX-XXX-XX1',
          status: 1,
          difficulty: 1,
        },
        {
          level_name: 'approved level',
          creator: 2,
          code: 'XXX-XXX-XX3',
          status: 1,
          difficulty: 1,
        },
        {
          level_name: 'approved level',
          creator: 2,
          code: 'XXX-XXX-XX4',
          status: 1,
          difficulty: 1,
        },
        {
          level_name: 'pending level',
          creator: 2,
          code: 'XXX-XXX-XX8',
          status: 0,
          difficulty: 0,
          videos: 'https://youtube.com,https://twitch.tv',
        },
      ],
      Plays: [
        {
          code: 1,
          player: 3,
          completed: 1,
        },
        {
          code: 1,
          player: 1,
          completed: 1,
        },
      ],
      Videos: [
        {
          level_id: 2,
          url: 'https://youtube.com',
          type: 'youtube',
        },
        {
          level_id: 2,
          url: 'https://twitch.tv/videos',
          type: 'twitch',
        },
        {
          level_id: 1,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused',
          type: 'twitch',
        },
        {
          level_id: 1,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused2',
          type: 'twitch',
        },
        {
          level_id: 1,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused3',
          type: 'twitch',
        },
        {
          level_id: 6,
          url: 'https://youtube.com',
          type: 'youtube',
        },
        {
          level_id: 6,
          url: 'https://twitch.tv/videos',
          type: 'twitch',
        },
        {
          level_id: 3,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused',
          type: 'twitch',
        },
        {
          level_id: 3,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused2',
          type: 'twitch',
        },
        {
          level_id: 3,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused3',
          type: 'twitch',
        },
        {
          level_id: 4,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused',
          type: 'twitch',
        },
        {
          level_id: 4,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused2',
          type: 'twitch',
        },
        {
          level_id: 4,
          play_id: 2,
          url: 'https://clips.twitch.tv/alreadyused3',
          type: 'twitch',
        },
      ],
    });
  });

  it('!addvid success', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd:
          '!addvids xxx-xxx-xxx https://youtube.com,https://clips.twitch.tv',
        channel: 'general',
        discord_id: '256',
      }),
      '<@256> Clear videos added for "approved level" by "Creator" \nCurrent videos:```\nhttps://clips.twitch.tv/alreadyused\nhttps://clips.twitch.tv/alreadyused2\nhttps://clips.twitch.tv/alreadyused3\nhttps://youtube.com\nhttps://clips.twitch.tv```',
    );
  });

  it('!addvid success, delimited with \\n', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd:
          '!addvids xxx-xxx-xx1 \nhttps://youtube.com\nhttps://clips.twitch.tv',
        channel: 'general',
        discord_id: '256',
      }),
      '<@256> Clear videos added for "approved level" by "Creator" \nCurrent videos:```\nhttps://clips.twitch.tv/alreadyused\nhttps://clips.twitch.tv/alreadyused2\nhttps://clips.twitch.tv/alreadyused3\nhttps://youtube.com\nhttps://clips.twitch.tv```',
    );
  });

  it('!addvid success, delimited with space', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd:
          '!addvids xxx-xxx-xx3 https://youtube.com https://clips.twitch.tv',
        channel: 'general',
        discord_id: '256',
      }),
      '<@256> Clear videos added for "approved level" by "Creator" \nCurrent videos:```\nhttps://clips.twitch.tv/alreadyused\nhttps://clips.twitch.tv/alreadyused2\nhttps://clips.twitch.tv/alreadyused3\nhttps://youtube.com\nhttps://clips.twitch.tv```',
    );
  });

  it('!addvid no code', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!addvids',
        channel: 'general',
        discord_id: '256',
      }),
      `>>> **!addvids __<levelCode>__ <Link1,Link2,Link3,...>**\n${await TEST.mockMessageReply(
        'error.noCode',
        { type: 'userError', discord_id: 256 },
        {},
      )}`,
    );
  });

  it('!addvid no vids', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!addvids xxx-xxx-xxx',
        channel: 'general',
        discord_id: '256',
      }),
      `>>> **!addvids <levelCode> __<Link1,Link2,Link3,...>__**\n${await TEST.mockMessageReply(
        'error.noVideos',
        { type: 'userError', discord_id: 256 },
        {},
      )}`,
    );
  });

  it('!addvid not valid url', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!addvids XXX-XXX-XX2 example of not url',
        channel: 'general',
        discord_id: '256',
      }),
      `>>> **!addvids <levelCode> __<Link1,Link2,Link3,...>__**\n${await TEST.mockMessageReply(
        'error.notUrls',
        { type: 'userError', discord_id: 256 },
        { urls: 'example\nof\nnot\nurl' },
      )}`,
    );
  });

  it('!addvid none added', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!addvids XXX-XXX-XX2 https://youtube.com',
        channel: 'general',
        discord_id: '256',
      }),
      'No new clear video added for "pending level" by Creator\nCurrent videos:```\nhttps://youtube.com\nhttps://twitch.tv/videos``` ',
    );
  });

  it('!removevid success', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!removevids XXX-XXX-XX2 https://youtube.com',
        channel: 'general',
        discord_id: '256',
      }),
      '<@256> Clear videos removed for "pending level" by "Creator" \nCurrent videos:```\nhttps://twitch.tv/videos```',
    );
  });

  it('!removevid success by mod', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!removevids XXX-XXX-XX2 https://twitch.tv/videos',
        channel: 'general',
        discord_id: '128',
      }),
      '<@128> Clear videos removed for "pending level" by "Creator" \nCurrent videos:```\n```',
    );
  });

  it('!removevid fail by other player', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!removevids XXX-XXX-XX8 https://youtube.com',
        channel: 'general',
        discord_id: '512',
      }),
      'You can\'t remove videos from "pending level" by "Creator" ',
    );
  });

  it('!removevid none', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!removevids XXX-XXX-XX8 https://clips.twitch.tv',
        channel: 'general',
        discord_id: '256',
      }),
      'No videos have been removed for "pending level" by "Creator"\nCurrent videos:```\nhttps://youtube.com\nhttps://twitch.tv/videos``` ',
    );
  });

  it('!addmyvid', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!addmyvids XXX-XXX-XXX https://clips.twitch.tv/12345',
        channel: 'general',
        discord_id: '512',
      }),
      '<@512> Clear videos added for "approved level" by "Creator" \nYour current videos:```\nhttps://clips.twitch.tv/12345```',
    );
  });

  it('!addmyvid no clear', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd: '!addmyvids XXX-XXX-XXX https://clips.twitch.tv/12345',
        channel: 'general',
        discord_id: '1024',
      }),
      "You haven't submitted a clear for this level yet, try using `!clear XXX-XXX-XXX` before trying to add a video. ",
    );
  });

  it('!addmyvid disallowed site', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd:
          '!addmyvids XXX-XXX-XXX https://clips.othersite.tv/12345',
        channel: 'general',
        discord_id: '512',
      }),
      `>>> **!addvids <levelCode> __<Link1,Link2,Link3,...>__**\n${await TEST.mockMessageReply(
        'addVids.notAllowed',
        { type: 'userError', discord_id: 512 },
        { videos: 'https://clips.othersite.tv/12345' },
      )}`,
    );
  });

  it('!addmyvid already used clearvid', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd:
          '!addmyvids XXX-XXX-XXX https://clips.twitch.tv/alreadyused',
        channel: 'general',
        discord_id: '512',
      }),
      'The following url is already used as a clearvid for another member: ```https://clips.twitch.tv/alreadyused``` ',
    );
  });

  it('!removemyvids', async () => {
    assert.equal(
      await TEST.mockBotSend({
        cmd:
          '!removemyvids XXX-XXX-XXX https://clips.twitch.tv/alreadyused2',
        channel: 'general',
        discord_id: '128',
      }),
      '<@128> Clear videos removed for "approved level" by "Creator" \nCurrent videos:```\nhttps://clips.twitch.tv/alreadyused\nhttps://clips.twitch.tv/alreadyused3```',
    );
  });
});
