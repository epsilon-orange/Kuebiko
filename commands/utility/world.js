const { SlashCommandBuilder } = require('discord.js');
const { country } = require('./countries.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('country')
		.setDescription('gives rundown on important info')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('country to search')
        ),

	async execute(interaction) {

        switch (interaction.options.getString('input')){
            case "'aina":
                await interaction.reply(country.aina);
                break;
            case "aain":
                await interaction.reply(country.aain);
                break;
            case "acasa":
                await interaction.reply(country.acasa);
                break;
            case "anabi":
                await interaction.reply(country.anabiname);
                break;
            case "bhumi":
                await interaction.reply(country.bhumi);
                break;
            case "east-ghara":
                await interaction.reply(country.eghara);
                break;
            case "el'la":
                await interaction.reply(country.ella);
                break;
            case "fanua":
                await interaction.reply(country.fanua);
                break;
            case "ghara":
                await interaction.reply(country.ghara);
                break;
            case "gitouom":
                await interaction.reply(country.gitouom);
                break;
            case "kariaga":
                await interaction.reply(country.kariaga);
                break;
            case "mythekora":
                await interaction.reply(country.mythecora);
                break;
            case "t'tang":
                await interaction.reply(country.ttang);
                break;
            case "torpaq":
                await interaction.reply(country.torpaq);
                break;
            case "zeme":
                await interaction.reply(country.zeme);
                break;
            case "zemlya":
                await interaction.reply(country.zemlya);
                break;
            case "zhatochi":
                await interaction.reply(country.zhatochi);
                break;
        }
	},
};