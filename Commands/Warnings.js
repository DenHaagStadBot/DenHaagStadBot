const discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply('> Je moet iemand taggen om zijn aantal warns te kunnen zien.');

    var warnUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id || message.author.id);

    if (!warnUser) return message.reply('> De bot kan de opgegeven gebruiker niet vinden.');

    const warns = JSON.parse(fs.readFileSync('./warnings.json', "UTF8"));

    if (!warns[warnUser.id]) return message.reply('> De gebruiker heeft op dit moment nog geen warns.')

    message.reply(`> De opgegeven gebruiker heeft ${warns[warnUser.id].warns.toString()} warn(s).`)

}

module.exports.help = {
    name: 'warnings',
    category: 'info',
    description: 'With this command can you see how much warns you have.'
}