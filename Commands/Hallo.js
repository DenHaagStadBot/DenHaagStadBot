const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    return message.reply('> Hoi!');

}

module.exports.help = {
    name: 'hallo',
    category: 'general',
    description: 'Met dit commando zegt de bot hoi terug.'
}