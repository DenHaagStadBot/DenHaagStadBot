const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
var reason = args.slice(0).join(" ");

    message.delete();
    return message.channel.send(reason);


}

module.exports.help = {
    name: "say",
    category: 'game',
    description: 'Met dit commando zegt de bot wat jij hebt gezegd.',
    aliases: []
}