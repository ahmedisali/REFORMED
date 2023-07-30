const { ApplicationCommandOptionType, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder().setName('wipcommands').setDescription('Replies with the commands in dev'),
    run: ({ interaction }) => {
        interaction.reply('Commands: "/ban", "/kick", "/ping" ');
    },

};