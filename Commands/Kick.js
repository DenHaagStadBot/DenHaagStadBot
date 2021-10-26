const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('> Deze command kan alleen uitgevoerd worden door server moderators.');

    if (!message.guild.me.permissions.has('KICK_MEMBERS')) return message.reply('> De bot heeft niet de juiste permissies om iemand te kunnen kicken.');

    if (!args[0]) return message.reply('> Je moet een gebruiker meegeven om die te kunnen kicken.');

    if (!args[1]) return message.reply('> Je moet een reden meegeven om iemand te kunnen kicken.');

    var kickUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id);

    if (!kickUser) return message.reply('> De bot kan de gebruiker niet vinden die je hebt opgegeven.');

    if (kickUser.permissions.has('MANAGE_MESSAGES')) return message.reply('> Je kan geen server moderators kicken.');

    var reason = args.slice(1).join(' ');

    var kickEmbed = new discord.MessageEmbed()
        .setColor('#f73115')
        .addFields(
            { name: 'Gekickt', value: `> ${kickUser}, ${kickUser.id}` },
            { name: 'Gekickt door', value: `> ${message.author}, ${message.author.id}` },
            { name: 'Reden', value: `> ${reason}` })
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

    var kickLogEmbed = new discord.MessageEmbed()
        .setColor('#f73115')
        .addFields(
            { name: 'Gekickt', value: `> ${kickUser}, ${kickUser.id}` },
            { name: 'Gekickt door', value: `> ${message.author}, ${message.author.id}` },
            { name: 'Reden', value: `> ${reason}` })
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

    const kickLogChannel = message.member.guild.channels.cache.get('688467758853521446');

    const row = new discord.MessageActionRow().addComponents(

        new discord.MessageButton()
            .setCustomId('yesknop')
            .setLabel('Ja')
            .setStyle('SUCCESS'),

        new discord.MessageButton()
            .setCustomId('noknop')
            .setLabel('Nee')
            .setStyle('DANGER')
    );

    const kickEmbedPromt = new discord.MessageEmbed()
        .setDescription(`Wil je ${kickUser} kicken?`)
        .setColor('#f73115')

    message.reply({ embeds: [kickEmbedPromt], components: [row] });

    const filter = (interaction) => {
        if (interaction.user.id === message.author.id) return true;
        return interaction.reply("> Jij kunt de buttons niet gebruiken.");
    }

    const collector = message.channel.createMessageComponentCollector({
        filter,
        max: 1
    });

    collector.on("collect", (interactionButton) => {

        const id = interactionButton.customId;

        switch (id) {
            case "yesknop":
                kickUser.kick(reason)
                interactionButton.reply({ embeds: [kickEmbed] })
                 return kickLogChannel.send({ embeds: [kickLogEmbed] });

            case "noknop":
                return interactionButton.reply("> Kick geanuleert.");


        }
    });


}

module.exports.help = {
    name: 'kick',
    category: 'staff',
    description: 'Met dit commando kan een stafflid een lid kicken.'
}