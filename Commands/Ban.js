const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('> Deze command kan alleem maar gebruikt worden door moderators.');

    if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply('> De bot heeft niet de juiste permissies om iemand te bannen.');

    if (!args[0]) return message.reply('> Je moet een gebruiker meegeven die je wilt bannen.');

    if (!args[1]) return message.reply('> Je moet een reden meegeven om iemand te kunnen bannen.');

    var banUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id);

    if (!banUser) return message.reply('> De bot kan de opgegeven gebruiker niet vinden.');

    if (banUser.permissions.has('MANAGE_MESSAGES')) return message.reply('> Je kan geen server moderators bannen.');

    var reason = args.slice(1).join(' ');

    var banEmbed = new discord.MessageEmbed()
        .setColor('#f73115')
        .addFields(
            { name: 'Banned', value: `> ${banUser}, ${banUser.id}` },
            { name: 'Banned by', value: `> ${message.author}, ${message.author.id}` },
            { name: 'Reason', value: `> ${reason}` })
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

    var banLogEmbed = new discord.MessageEmbed()
        .setColor('#f73115')
        .addFields(
            { name: 'Banned', value: `> ${banUser}, ${banUser.id}` },
            { name: 'Banned by', value: `> ${message.author}, ${message.author.id}` },
            { name: 'Reason', value: `> ${reason}` })
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

    const banLogChannel = message.member.guild.channels.cache.get('688467758853521446');

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

    const BanEmbedPromt = new discord.MessageEmbed()
        .setDescription(`Wil je ${banUser} bannen?`)
        .setColor('#f73115')

    message.reply({ embeds: [BanEmbedPromt], components: [row] });

    const filter = (interaction) => {
        if (interaction.user.id === message.author.id) return true;
        return interaction.reply("> Jij kan de buttons niet gebruiken.");
    }

    const collector = message.channel.createMessageComponentCollector({
        filter,
        max: 1
        });

    collector.on("collect", (interactionButton) => {

        const id = interactionButton.customId;

        switch (id) {
            case "yesknop":
                banUser.ban({ reason: reason })
                interactionButton.reply({ embeds: [banEmbed] })
                 return banLogChannel.send({ embeds: [banLogEmbed] });

            case "noknop":
                return interactionButton.reply("> Ban geanuleert.");


        }
    });


}

module.exports.help = {
    name: 'ban',
    category: 'staff',
    description: 'Met dit commando kan een Discord moderator een server lid bannen.'
}