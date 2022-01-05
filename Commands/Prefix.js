const discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has('595601121821851659')) return message.reply('> Dit commando is alleen voor een Discord developer.');

    if (!args[0]) return message.reply('> Gebruik  `,prefix (gewenste prefix)`.');

    var prefixes = JSON.parse(fs.readFileSync('./Prefixes.json'));

    prefixes[message.guild.id] = {

        prefix: args[0]

    };

    fs.writeFileSync('./Prefixes.json', JSON.stringify(prefixes), (err) => {

        if (err) console.log(err);

    });

    var prefixEmbed = new discord.MessageEmbed()
        .setTitle('Prefix!')
        .setColor('#f73115')
        .addFields(
            { name: 'Nieuwe Prefix', value: `> ${args[0]}` },
        );
    return message.reply({ embeds: [prefixEmbed] });

}


module.exports.help = {
    name: "prefix",
    category: 'general',
    description: 'Kies je eigen prefix waarmee jij de bot opdrachten mee wilt uitvoeren.',
    aliases: []
}