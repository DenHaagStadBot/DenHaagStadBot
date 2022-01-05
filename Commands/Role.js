const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    return message.reply('> Dit commando is niet in gebruik.')

    // const options = [
    //     {
    //         label: 'Training Notificatie',
    //         value: "757904431051440219"
    //     },
    //     {
    //         label: 'Mention',
    //         value: "910533266593947699"
    //     },
    //     {
    //         label: 'Test3',
    //         value: "910516987107622972"
    //     }
    // ];

    // const row = new discord.MessageActionRow()
    //     .addComponents(
    //         new discord.MessageSelectMenu()
    //             .setCustomId('role')
    //             .setMinValues(0)
    //             .setMaxValues(3)
    //             .setPlaceholder('Select a role.')
    //             .addOptions(options)
    //     );

    // return message.reply({ content: 'Role prompt.', components: [row] })

}

module.exports.help = {
    name: 'role',
    category: 'info',
    description: 'Met dit commando kan je speciale rollen krijgen.',
    aliases: []
}