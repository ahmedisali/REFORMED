require("dotenv").config();
const { Client, IntentsBitField, ActivityType } = require("discord.js");
const { CommandHandler } = require("djs-commander");
const path = require("path");

const client = new Client({

  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, "commands"),
  testServer: "1116139828279529602",
});

client.on("ready", (c) => {
  console.log(`✅  ${client.user.tag} is online 🤖`);
  console.log(`${client.user.tag} is running, check for error(s) ↕`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 100000);
});

// Reformed Bot Status
let status = [
  {
    name: "twitch.tv/reformedcomeback",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=eBGIQ7ZuuiU",
  },
  {
    name: "reformed.com",
    type: ActivityType.Listening,
    url: "ogusers.com",
  },
  {
    name: "reformed.io",

    type: ActivityType.Playing,
    url: "https://www.youtube.com/watch?v=eBGIQ7ZuuiU",
  },
  {
    name: "reformed.site",
    type: ActivityType.Watching,
    url: "https://www.youtube.com/watch?v=eBGIQ7ZuuiU",
  },
];

client.login(process.env.TOKEN);
