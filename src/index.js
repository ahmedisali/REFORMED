require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require("discord.js");
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✔ ${c.user.tag} is online`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});


// Reformed Bot Status
let status = [
  {
    name: 'twitch.tv/reformedcomeback',
  type: ActivityType.Streaming,
  url: 'https://www.youtube.com/watch?v=eBGIQ7ZuuiU',
  },
  {
    name: 'reformed.com',
  type: ActivityType.Listening,
  url: 'https://music.apple.com/us/artist/yeat/1318094493',
  },
  {
    name: 'reformed.io',
  type: ActivityType.Playing,
  //url: 'https://www.youtube.com/watch?v=eBGIQ7ZuuiU',
  },
  {
    name: 'reformed.site',
  type: ActivityType.Watching,
  url: 'https://www.youtube.com/watch?v=eBGIQ7ZuuiU',
  },
]

eventHandler(client);

client.login(process.env.TOKEN);
