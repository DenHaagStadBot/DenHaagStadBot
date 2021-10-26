const discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle(`${message.guild.name}`)
        .setColor('#f73115')
        .addFields(
            { name: 'Founder', value: `> <@486559825984225283>`},
            { name: 'ID', value: `> ${message.guild.id}`},
            { name: "Bots", value: `> 9`},
            { name: "People", value: `> ${message.guild.memberCount - message.guild.members.cache.filter(m =>m.user.bot).size}`},
            { name: "Created on", value: `> ${moment(message.guild.createdAt).format('LL')}`},
            { name: "Joined on", value: `> ${message.member.joinedAt.toString()}`}
            
        )
        .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        .setTimestamp()

        const row = new discord.MessageActionRow().addComponents(
                
            new discord.MessageButton()
                .setLabel('Link')
                .setStyle('LINK')
                .setURL('https://discord.gg/8Xsh8MpeDh')
    
        );

        return message.reply({ embeds: [botEmbed], components: [row] });

}

module.exports.help = {
    name: 'serverinfo',
    category: 'info',
    description: 'Met dit commando geeft de bot info weer over de server.'
}