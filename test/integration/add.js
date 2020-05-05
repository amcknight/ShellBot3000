describe('!add', function () {
  before(async () => {
    await ts.setupData({
      Members: [{
        name: 'Mod',
        discord_id: '128',
      }, {
        name: 'Creator',
        discord_id: '256',
      }, {
        name: 'Banned',
        discord_id: '-1',
        is_banned:1,
      }],
      Levels: [{
        level_name: 'level1',
        creator: 2,
        code: 'XXX-XXX-XXX',
        status: 1,
        difficulty: 1,
      },{
        level_name: 'level2',
        creator: 2,
        code: 'XXX-XXX-XX2',
        status: 0,
        difficulty: 0,
      },{
        level_name: 'level3',
        creator: 2,
        code: 'XXX-XXX-XX3',
        status: 1,
        difficulty: 1,
      }],
    });
  });

  it('no level code', async function () {
    const result = await mockBotSend({
      cmd: '!add',
      channel: 'general',
      discord_id: '256',
    })
    assert.equal(result,await ts.mockMessage('error.noCode',{type:'userError'},{name:'Creator'}))
  })
  it('no level name', async function () {
    const result = await mockBotSend({
      cmd: '!add xxx-xxx-xxx',
      channel: 'general',
      discord_id: '256',
    })
    assert.equal(result,await ts.mockMessage('add.noName',{type:'userError'},{name:'Creator'}))
  })
  it('invalid code', async function () {
    const result = await mockBotSend({
      cmd: '!add xx-xxx-xxx',
      channel: 'general',
      discord_id: '256',
    })
    assert.equal(result,await ts.mockMessage('error.invalidCode',{type:'userError'},{code:'XX-XXX-XXX'}))
  })

  
  it('adding existing', async function () {
    const result = await mockBotSend({
      cmd: '!add xxx-xxx-xxx long name',
      channel: 'general',
      discord_id: '256',
    })
    assert.equal(result,await ts.mockMessage('add.levelExisting',{type:'userError'},{level:{
      level_name:'level1',
      code:'XXX-XXX-XXX',
      creator:'Creator',
    }}))
  })
  it('no code', async function () {
    const result = await mockBotSend({
      cmd: '!add long name',
      channel: 'general',
      discord_id: '256',
    })
    assert.equal(result,await ts.mockMessage('error.invalidCode',{type:'userError'},{
      level_name:'',
      code:'XXX-XXX-XXX',
      creator:'Creator',
    }))
  })

  it('successful', async function () {
    const result = await mockBotSend({
      cmd: '!add XXX-XXX-XX4 long name',
      channel: 'general',
      discord_id: '256',
    })
    assert.equal(result,await ts.mockMessage('add.success',{type:'registeredSuccess',discord_id:'256'},{
      level_name:'long name',
      code:'XXX-XXX-XX4',
    }))
    const levels=await ts.getLevels();
    assert.lengthOf(levels,4)
    assert.equal(levels[3].code,'XXX-XXX-XX4')
    assert.equal(levels[3].creator,'Creator')
    assert.equal(levels[3].status,0)
    assert.equal(levels[3].difficulty,0)
  })

  it('no points', async function () {
    await ts.clearTable('levels');
    ts.teamVariables['Minimum Point']=10
    await ts.recalculateAfterUpdate();
    const result = await mockBotSend({
      cmd: '!add XXX-XXX-XX4 long name',
      channel: 'general',
      discord_id: '256',
    })
    const player=await ts.get_user('256')
    assert.equal(result,await ts.mockMessage('points.cantUpload',{type:'userError',discord_id:'256'},{
      points_needed:Math.abs(player.earned_points.available).toFixed(1)
    }))
    const levels=await ts.getLevels();
    assert.lengthOf(levels,0)
  })

  it('Submit SMM1 code with allowSMM1 flag off', async function () {
    ts.teamVariables.allowSMM1=null
    ts.teamVariables['Minimum Point']=0
    const result = await mockBotSend({
      cmd: '!add 0791-0000-03DD-2D52 The Ultimate Road of Shell',
      channel: 'general',
      discord_id: '256',
    })
    assert.equal(result,await ts.mockMessage('error.invalidCode',{type:'userError'},{code:'0791-0000-03DD-2D52'}))
  })

  it('Submit SMM1 code with allowSMM1 flag on', async function () {
    ts.teamVariables.allowSMM1=1
    const result = await mockBotSend({
      cmd: '!add 0791-0000-03DD-2D52 The Ultimate Road of Shell',
      channel: 'general',
      discord_id: '128',
    })
    assert.equal(result,await ts.mockMessage('add.success',{type:'registeredSuccess',discord_id:'128'},{
      level_name:'The Ultimate Road of Shell',
      code:'0791-0000-03DD-2D52',
    }))
    const levels=await ts.getLevels();
    assert.lengthOf(levels,1)
    assert.equal(levels[0].code,'0791-0000-03DD-2D52')
    assert.equal(levels[0].creator,'Mod')
    assert.equal(levels[0].status,0)
    assert.equal(levels[0].difficulty,0)
  })

})