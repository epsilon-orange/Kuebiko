const { SlashCommandBuilder } = require('discord.js');
const { define } = require('./definitions.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('define')
		.setDescription('Explains the meaning of a word')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Term to define')
        ),

	async execute(interaction) {

        switch (interaction.options.getString('input')){
            case "the-collapse":
                await interaction.reply(define.thecollapse);
                break;
            case "bc":
                await interaction.reply(define.bc);
                break;
            case "ac":
                await interaction.reply(define.ac);
                break;
            case "annum":
                await interaction.reply(define.annum);
                break;
            case "centinnium":
                await interaction.reply(define.centinnium);
                break;
            case "ao":
                await interaction.reply(define.ao);
                break;
            case "majl-kai":
                await interaction.reply(define.majlkai);
                break;
            case "anabi":
                await interaction.reply(define.anabi);
                break;
            case "planer-system":
                await interaction.reply(define.tps);
                break;
            case "intersect":
                await interaction.reply(define.theinter);
                break;
            case "aarukatsu":
                await interaction.reply(define.aaru);
                break;
            case "duyat":
                await interaction.reply(define.duyat);
                break;
            case "taqa":
                await interaction.reply(define.taqa);
                break;
            case "taqago":
                await interaction.reply(define.taqa);
                break;
            case "rih":
                await interaction.reply(define.rih);
                break;
            case "rihgo":
                await interaction.reply(define.rihgo);
                break;
            case "jade-age":
                await interaction.reply(define.jadeage);
                break;
            case "sekhmet-no-rih":
                await interaction.reply(define.sekh);
                break;
            case "yokai":
                await interaction.reply(define.yokai);
                break;
            case "obake":
                await interaction.reply(define.obake);
                break;
            case "discovering":
                await interaction.reply(define.dis);
                break;
            case "industrial-boom":
                await interaction.reply(define.boom);
                break;
            case "taking":
                await interaction.reply(define.take);
                break;
            case "conflict":
                await interaction.reply(define.con);
                break;
            case "aoen-war":
                await interaction.reply(define.aowar);
                break;
            case "cobalt-war":
                await interaction.reply(define.cobwar);
                break;
            case "te-rangi-intervention":
                await interaction.reply(define.terainter);
                break;
        }
	},
};