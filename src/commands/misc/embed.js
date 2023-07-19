module.exports = {
  name: "ping",
  description: "Pong!",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interactionCreate, EmbedBuilder) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "embed") {
      const embed = new EmbedBuilder()
        .setTitle("Test Embed")
        .setDescription("This is a test embed description")
        .setColor("Random")
        .addFields(
          {
            name: "Field title",
            value: "Some random value",
            inline: true,
          },
          {
            name: "2nd Field title",
            value: "Some random value",
            inline: true,
          }
        );

      interaction.reply({ embeds: [embed] });
    }
  },
};

// Embed Command

/*client.on('messageCreate', (message) => {
    if (message.content === 'embed') {
      const embed = new EmbedBuilder()
        .setTitle('Test Embed')
        .setDescription('This is a Test Embed embed description')
        .setColor('Random')
        .addFields(
          {
            name: 'Field title',
            value: 'Some random value',
            inline: true,
          },
          {
            name: '2nd Field title',
            value: 'Some random value',
            inline: true,
          }
        );
  
      message.channel.send({ embeds: [embed] });
    }
  }); */
