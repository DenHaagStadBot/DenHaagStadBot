const discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Jij kan dit niet');

    if (!args[0]) return message.reply('> Je moet een gebruiker opgeven die je wilt warnen.');

    if (!args[1]) return message.reply('> Je moet een reden geven om een gebruiker te kunnen warnen.');

    var warnUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id);

    var reason = args.slice(1).join(' ');

    if (!warnUser) return message.reply('> De bot kan de gebruiker niet vinden die je hebt opgegeven.');

    if (warnUser.permissions.has('MANAGE_MESSAGES'))  return message.reply('> Je kan geen server moderators warnen.');

    const warns = JSON.parse(fs.readFileSync('./Warnings.json', "UTF8"));

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    }

    warns[warnUser.id].warns++;

    var warningLogEmbed = new discord.MessageEmbed()
        .setColor("#f73115")
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        .setTimestamp()
        .addFields(
            { name: 'Gewarnd', value: `> ${warnUser} (${warnUser.id})`},
            { name: 'Gewarnd door', value: `> ${message.author} (${message.author.id})`},
            { name: "Reden", value: `> ${reason}`},
            { name: "Aantal warnings", value: `> ${warns[warnUser.id].warns.toString()}`}
        )

    const warningLogChannel = message.member.guild.channels.cache.get('688467758853521446');

    if (!warningLogChannel) return ('> Het kanaal waar de bot de warn moet inzetten is er niet.');

    warningLogChannel.send({ embeds: [warningLogEmbed] });

    message.reply(`> ${warnUser} is gewarnd.`)

    fs.writeFile('./warnings.json', JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

}

module.exports.help = {
    name: 'warn',
    category: 'staff',
    description: 'Met dit commando kan een server moderator een lid warnen.',
    aliases: []
}