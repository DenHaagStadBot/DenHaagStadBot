const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

return message.reply('Voer een geldig commando uit. Alle commands kunt u terug vinden door `,commands` te typen.')


}


module.exports.help = {
    name: "",
    // category: 'general',
    // description: ''
    aliases: []
}