const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle('Discord Servers Den Haag Stad.')
        .setColor('#f73115')
        .addFields(
            { name: 'YouTube Server', value: `> [YouTube Server](https://discord.gg/Bt94fKAYSB)` },
            { name: 'Sollicitatie Server', value: `> [Sollicitatie Server](https://discord.gg/NCHjWjZg96)` },
            { name: 'Koninklijke Landmacht', value: `> [Koninklijke Landmacht](https://discord.gg/s5DnaFZtEq)` },
            { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee](https://discord.gg/4fGDD7pagH)` },
            { name: 'Dienst Speciale Interventies', value: `> [Dienst Speciale Interventies](https://discord.gg/NSdXwCxhK2)` }
        )
        .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        .setTimestamp()

    return message.reply({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "servers",
    category: 'info',
    description: 'Met dit commando geeft alle Discord servers weer.',
    aliases: []
}