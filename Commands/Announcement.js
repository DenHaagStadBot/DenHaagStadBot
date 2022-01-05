const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !announcement title | bericht | kleur | kanaal

    // if (!message.member.roles.cache.has('595601121821851659')) return message.channel.send('> Dit commando kan alleen nog maar gebruikt worden door een Discord developer.');

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik mededeling commando.")
            .setColor("#f73115")
            .setDescription(`Maak een mededeling door gebruik te maken van: \n ,announcement titel ${seperator} bericht ${seperator} kleur ${seperator} kanaal`);

        return message.reply({embeds: [embed]});

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#eeeeee";
    if (argsList[3] === undefined) argsList[3] = "general";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var announceEmbed = new discord.MessageEmbed()
        .setColor(options.kleur)
        .setTitle(options.titel)
        .setDescription(`${options.bericht}`)
        .setFooter(`Mededeling van ${message.author.username}.`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("> Dit kanaal bestaat niet.");

    channel.send({embeds: [announceEmbed]});

}

module.exports.help = {
    name: "mededeling",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
    aliases: []
}