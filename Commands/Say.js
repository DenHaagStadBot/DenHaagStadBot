const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
var reason = args.slice(0).join(" ");

    message.delete();
    return message.channel.send(reason);


}

module.exports.help = {
    name: "say",
    category: 'general',
    description: 'Met dit commando zegt de bot wat jij hebt gezegd.'
}