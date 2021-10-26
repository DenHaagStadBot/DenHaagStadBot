const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle('Bot information.')
        .setColor('#f73115')
        .addFields(
            { name: 'Bot name', value: `> ${client.user.username}` },
            { name: 'Bot ID', value: `> ${client.user.id}` },
            { name: 'Made by', value: `> <@712621794053587016>` },
            { name: 'Created on', value: `> Visual Studio Code` },
            { name: 'Discord.js', value: `> 13.1.0` },
            { name: 'Platform', value: `> MacOS` },
            { name: 'Last update', value: `> 26 Okt. 2021` },
            { name: 'Created on', value: `> 15 Aug. 2021` }
        )
        .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        .setTimestamp()

        const row = new discord.MessageActionRow().addComponents(
                
            new discord.MessageButton()
                .setLabel('TwoepKoep Chats.')
                .setStyle('LINK')
                .setURL('https://discord.gg/VrWyrpkM6B')
    
        );

        return message.reply({ embeds: [botEmbed], components: [row] });


}

module.exports.help = {
    name: 'botinfo',
    category: 'info',
    description: 'Met dit commando geeft de bot info weer over zichzelf.'
}