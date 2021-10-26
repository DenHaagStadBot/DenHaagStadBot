const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply('> Beschrijf je bug.');

    if (!args[1]) return message.reply('> Beschrijf je bug goed.');

    if (!args[2]) return message.reply('> Beschrijf je bug goed.');

    if (!args[3]) return message.reply('> Beschrijf je bug goed.');

    const redenMessage = args.splice(0, args.length).join(' ');

    const reviewChannel = message.member.guild.channels.cache.get('752146535529185311');

    if (!reviewChannel) return message.reply('> Er is geen kanaal waar ik je bug kan in melden.');

    var reviewEmbed = new discord.MessageEmbed()
        .addField('Bug', `> ${redenMessage}`)
        .addField('Person', `> ${message.author}`)
        .setColor('#f73115')
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        .setTimestamp()

    message.reply(`> Je bug is verzonden! Je kan hem vinden in <#752146535529185311>.`);

    return reviewChannel.send({ embeds: [reviewEmbed] });



}

module.exports.help = {
    name: 'bug',
    category: 'info',
    description: 'Met dit commando kan je een bug melden.'
}