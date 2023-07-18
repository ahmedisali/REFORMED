require('dotenv').config();
const {
  Client,
  IntentsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
  {
    id: '1130957832775278753',
    label: 'Red',
  },
  {
    id: '1130957874575712296',
    label: 'Green',
  },
  {
    id: '1130957782397505536',
    label: 'Blue',
  },
];

client.on('ready', async (c) => {
  try {
    const channel = await client.channels.cache.get('1116139829105786992', '1130958688149065759');
    if (!channel) return;

    const row = new ActionRowBuilder();

    roles.forEach((role) => {
      row.components.push(
        new ButtonBuilder()
          .setCustomId(role.id)
          .setLabel(role.label)
          .setStyle(ButtonStyle.Primary)
      );
    });

    await channel.send({
      content: 'Claim or remove a role below.',
      components: [row],
    });
    process.exit();
  } catch (error) {
    console.log(error);
  }
});

client.login(process.env.TOKEN);