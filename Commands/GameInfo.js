const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const gameEmbed = new discord.MessageEmbed()
        .setTitle('Game Informatie')
        .addFields(
            { name: 'Game Creator', value: `> <@486559825984225283>` },
            { name: 'Game Name', value: `> Den Haag Stad` },
            { name: 'Game Link', value: `> [Den Haag Stad](https://www.roblox.com/games/5784855325/Den-Haag-Stad)` },
            { name: 'Game Developers', value: `> <@690126965729918978> \n > <@613688933980831754> \n >  <@527416839211319318> \n > <@722779830025977936> \n > <@340846369701101575> \n > <@452758813053812737>` }
        )
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        .setColor('#f73115')
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/562200277248114719/922619599118278706/Dhs.png')
    message.reply({ embeds: [gameEmbed] })

}

module.exports.help = {
    name: "gameinfo",
    category: 'info',
    description: 'Met dit commando geeft alle Discord servers weer.',
    aliases: []
}