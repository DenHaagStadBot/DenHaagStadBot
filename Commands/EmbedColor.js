const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const row = new discord.MessageActionRow().addComponents(

        new discord.MessageButton()
            .setCustomId('frog')
            .setLabel('Frog.')
            .setStyle('SUCCESS'),

        new discord.MessageButton()
            .setCustomId('twoepkoepchats')
            .setLabel('TwoepKoep Chats.')
            .setStyle('DANGER'),

    );

    var embedColorPrompt = new discord.MessageEmbed()
    .setDescription('Kies tussen de twee bots.')
    .setColor('#f73115')

    
    message.reply({ embeds: [embedColorPrompt], components: [row] });

    const filter = (interaction) => {
        if (interaction.user.id === message.author.id) return true;
        return interaction.reply("Jij kan dit niet gebruiken.");
    }
 
    const collector = message.channel.createMessageComponentCollector({
        filter,
        max: 1000
    });
 
   collector.on("collect", (interactionButton) => {
 
        const id = interactionButton.customId;
 
        switch (id) {
            case "frog":
                return interactionButton.reply('> #6aa75e');
            case "twoepkoepchats":
                return interactionButton.reply('> #f73115');
                
        }
    });


}

module.exports.help = {
    name: 'ecolor',
    category: 'info',
    description: 'Met dit commando geeft de bot de embed kleuren mee.',
    aliases: []
}