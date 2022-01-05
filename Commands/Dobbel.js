const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var result = Math.ceil(Math.random() * 6);

     return message.reply(`> Je hebt \`${result}\` gegooid! :game_die:`);
}

module.exports.help = {
    name: "dobbel",
    category: "game",
    description: "Met dit commando zegt de bot een getal tussen de 1 en de 6.",
    aliases: []
}