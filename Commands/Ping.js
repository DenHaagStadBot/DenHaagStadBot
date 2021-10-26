const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var pongEmbed = new discord.MessageEmbed()
    .setDescription("Pong: " + (message.createdTimestamp - Date.now()) + " ms")
    .setColor('#f73115')
    .setTimestamp()
    .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
    
    message.reply({embeds: [pongEmbed]}) 


}

module.exports.help = {
    name: "ping",
    category: 'general',
    description: 'Met dit commando kan je bekijken hoeveel ping je hebt.'
}