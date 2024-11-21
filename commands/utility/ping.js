const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('power-on')
		.setDescription('Turns the Interface on'),
	async execute(interaction) {
		await interaction.reply('Hello! How can I be of assistance?');
	},
};