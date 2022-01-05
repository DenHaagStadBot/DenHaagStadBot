const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const quotes = require("../Quotes.json")

    if (message.author.bot) return;

    var num = Math.floor(Math.random()*quotes.Quotes.length)

    var quoteEmbed = new discord.MessageEmbed()
     .setDescription(`${quotes.Quotes[num].q}`)
     .setColor('#f73115')
     .setFooter(`${quotes.Quotes[num].a}`);
     message.reply({embeds: [quoteEmbed]})

}

module.exports.help = {
    name: "quote",
    category: 'game',
    description: 'Met dit commando geeft de bot je een quote.',
    aliases: []
}