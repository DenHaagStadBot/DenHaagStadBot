const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Jij kan dit niet');

    const options = [
        {
            label: 'Support Team',
            value: "597321863357792276"
        },
        {
            label: 'Ticket Service',
            value: "687644963408052247"
        },
        {
            label: 'Staff Test',
            value: "910511877610688574"
        }
    ];

    const row = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageSelectMenu()
                .setCustomId('role')
                .setMinValues(0)
                .setMaxValues(3)
                .setPlaceholder('Select a role.')
                .addOptions(options)
        );

    return message.reply({ content: 'Staff role prompt.', components: [row] })

}

module.exports.help = {
    name: 'staffrole',
    category: 'info',
    description: 'Met dit commando geeft de bot je een speciale rol.',
    aliases: []
}