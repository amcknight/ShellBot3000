const debug = require('debug')('shellbot3000:discord');
const knex = require('./db/knex');
const TS = require('./TS.js');
const TSClient = require('./TSClient.js');
const DiscordLog = require('./DiscordLog');
const WebApi = require('./WebApi');
const DiscordWrapper = require('./DiscordWrapper');

const client = new TSClient();

client.on('guildCreate', async (guild) => {
  DiscordLog.log(`Joined a new guild: ${guild.name}`, client);
});

client.on('rateLimit', (info) => {
  debug(
    `Discord API rateLimit reached! ${info.limit} max requests allowed`,
  );
  debug(info);
});

client.on('debug', debug);

client.on('ready', async () => {
  await DiscordLog.log(
    `ShellBot3000 (${process.env.NODE_ENV}) has started , with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`,
    client,
  );
  const teams = await knex('teams').select();
  if (!teams) throw new Error(`No teams configurations buzzyS`);

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];
    const guild = client.guilds.cache.find(
      (g) => g.id === team.guild_id,
    );
    if (team && guild) {
      // eslint-disable-next-line no-await-in-loop
      await TS.add(guild.id, DiscordWrapper);
    }
  }
});

(async () => {
  // main thread
  try {
    await client.login(process.env.DISCORD_TOKEN);
    DiscordWrapper.setClient(client);
    const app = await WebApi(client);
    await app.listen(process.env.WEB_PORT, () =>
      DiscordLog.log(
        `ShellBot3000 (${process.env.NODE_ENV}):WebApi now listening on ${process.env.WEB_PORT}`,
        client,
      ),
    );
  } catch (error) {
    DiscordLog.error(error.stack, client);
  }
})();
