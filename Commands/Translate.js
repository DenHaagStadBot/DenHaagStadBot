const discord = require("discord.js");
const translate = require('@iamtraction/google-translate');

module.exports.run = async (client, message, args) => {

    const lang = args[0]

    if (!lang) return message.reply('> Kies een `ISO` code van de taal.')

    const txt = args.slice(1).join(' ');

    if (!txt) return message.reply('> Typ een tekst. `,translate \'taal\' \'tekst\'`.')

    translate(txt, { to: lang }).then(res => {

        const embed = new discord.MessageEmbed()
            .setDescription(res.text)
            .setColor('#f73115');

        message.reply({ embeds: [embed] });

    }).catch(err => {

        message.reply('> Kies een bestaande `IOS` taal code. Lijst van de IOS codes: https://nl.wikipedia.org/wiki/Lijst_van_ISO_639-codes')

    });

}


module.exports.help = {
    name: "translate",
    category: 'general',
    description: 'Met dit commando kan je tekst vertalen.',
    aliases: []
}