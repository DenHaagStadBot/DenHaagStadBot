const discord = require('discord.js');
const botConfig = require('../botConfig.json');

module.exports.run = async (client, message, args) => {

        var prefix = botConfig.prefix;

        var general = 'General\n';
        var info = '\nInformation\n';
        var staff = 'Staff Commands\n';

        client.commands.forEach(command => {

            switch (command.help.category) {

                case 'general':
                    general += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                    break;

                case 'info':
                    info += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                    break;

                case 'staff':
                    staff += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                    break;
            }

        });

        var generalEmbed = new discord.MessageEmbed()
            .setTitle('General Commands.')
            .setDescription(`${general}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
        
        var informationEmbed = new discord.MessageEmbed()
            .setTitle('Information Commands')
            .setDescription(`${info}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

        var staffEmbed = new discord.MessageEmbed()
            .setTitle(`Staff Commands`)
            .setDescription(`${staff}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

            const row = new discord.MessageActionRow().addComponents(

                new discord.MessageButton()
                    .setCustomId('generalknop')
                    .setLabel('Algemeen')
                    .setStyle('SUCCESS'),
        
                new discord.MessageButton()
                    .setCustomId('informationknop')
                    .setLabel('Informatie')
                    .setStyle('SUCCESS'),

                new discord.MessageButton()
                    .setCustomId('staffknop')
                    .setLabel('Staff')
                    .setStyle('SUCCESS')
            );
        
            const BanEmbedPromt = new discord.MessageEmbed()
                .setDescription('Kies een categorie.')
                .setColor('#f73115')
        
            message.reply({ embeds: [BanEmbedPromt], components: [row] });

            const filter = (interaction) => {
                if (interaction.user.id === message.author.id) return true;
                return interaction.reply("Jij kan dit niet gebruiken.");
            }
         
            const collector = message.channel.createMessageComponentCollector({
                filter,
                max: 100
            });
         
            collector.on("collect", (interactionButton) => {
          
                 const id = interactionButton.customId;
          
                 switch (id) {
                    case "generalknop":
                        return interactionButton.reply({ embeds: [generalEmbed] });
                    case "informationknop": 
                        return interactionButton.reply({ embeds: [informationEmbed] })
                    case "staffknop": 
                        return interactionButton.reply({ embeds: [staffEmbed] })
        
        
                 }
             });

}

module.exports.help = {
    name: 'commands',
    category: 'info',
    description: 'Met dit commando geeft de bot alle commands.'
}