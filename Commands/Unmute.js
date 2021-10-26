const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Alleen server moderators kan dit commando gebruiken.');

    if (!args[0]) return message.reply("> Geen gebruiker opgegeven.");

    var unmutePersoon = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id);

    if (!unmutePersoon) return message.reply("> Kan de gebruiker niet vinden.");

    if (unmutePersoon.permissions.has('MANAGE_MESSAGES')) return message.reply('> Je kan geen server moderators muten.');

    var muteRole = message.guild.roles.cache.get('882624046251012106');
    if (!muteRole) return message.channel.send("> De rol muted bestaat niet.");

    const muteChannel = message.guild.channels.cache.find(c => c.name == "「📃」user-logs");

     var muteEmbed = new discord.MessageEmbed()
      .setColor('#f73115')
      .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
      .setTimestamp()
      .addFields(
        { name: 'Geunmute persoon', value: `> ${unmutePersoon} (${unmutePersoon.id})`},
        { name: 'Geunmute door', value: `> ${message.author}`}
      )
      muteChannel.send({embeds: [muteEmbed]})


    unmutePersoon.roles.remove(muteRole.id);

    message.channel.send(`${unmutePersoon} is geunmute`);

  
}

module.exports.help = {
    name: "unmute",
    category: 'staff',
    description: 'Met dit commando kan een stafflid een lid unmuten.'
}