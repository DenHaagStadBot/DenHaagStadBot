const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var result = Math.ceil(Math.random() * 6);

    var dobbelEmbed = new discord.MessageEmbed()
     .setDescription(`Je hebt **${result}** gegooid! :game_die:`)
     .setColor('#f73115')
     .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
     .setTimestamp()
     
    message.reply({embeds: [dobbelEmbed]})

}

module.exports.help = {
    name: "dobbel",
    category: "general",
    description: "Met dit commando zegt de bot een getal tussen de 1 en de 6.",
}