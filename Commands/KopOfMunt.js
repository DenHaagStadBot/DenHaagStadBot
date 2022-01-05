const discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    var values = ["munt", "kop"];

    var result = values[Math.floor(Math.random() * values.length)];

    return message.reply(`> Het is \`${result}\` geworden :coin:!`);

}

module.exports.help = {
    name: 'kopofmunt',
    category: 'game',
    description: 'With this command you can play heads or tails.',
    aliases: []
}