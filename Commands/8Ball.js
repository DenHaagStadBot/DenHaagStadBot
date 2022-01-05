const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if (!args[2]) return message.reply("> Stel je volledige vraag");
    var antwoorden = ["Ja", "Nee", "Misschien", "Misschien niet", "Waarschijnlijk wel"];

    var resultaat = Math.floor((Math.random() * antwoorden.length));
    var vraag = args.slice(0).join(" ");

    var eightBallEmbed = new Discord.MessageEmbed()
    .setTitle(`8ball vraag van ${message.author.username}`)
    .setDescription("Lees hier de vraag van de 8ball")
    .setThumbnail("https://magic-8ball.com/assets/images/Our_magic_8_ball.png")
    .addFields([
       {name: "Vraag", value: `${vraag}`},
       {name: "Antwoord", value: `${antwoorden[resultaat]}`},
    ])
   .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
   .setTimestamp()
   .setColor('#f73115');

   message.reply({embeds: [eightBallEmbed]})


}


module.exports.help = {
    name: "8ball",
    category: 'game',
    description: 'Met dit commando geeft de bot een random antwoord op je vraag.',
    aliases: []
}