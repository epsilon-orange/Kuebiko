const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('power-off')
		.setDescription('Turns the Interface off'),
	async execute(interaction) {
		await interaction.reply('Goodbye!');
	},
};