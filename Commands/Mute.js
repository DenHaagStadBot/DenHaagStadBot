const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Jij kan dit niet');

    if (!args[0]) return message.reply("> Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("> Geen tijd opgegeven.");

    if (args[1]) 

    if (!args[2]) return message.reply("> Geen reden opgegeven.");

    var mutePerson = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id);

    if (!mutePerson) return message.reply("> Kan de gebruiker niet vinden.");

    if (mutePerson.permissions.has('MANAGE_MESSAGES')) return message.reply('> Je kan geen server moderators muten.');

    var muteRole = message.guild.roles.cache.get('905558383791308830');
    if (!muteRole) return message.channel.send("> De rol muted bestaat niet.");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("> Geen tijd opgegeven");

    var tijd = args[1]
    var reden = args.slice(2).join(" ")

    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`> ${mutePerson} is gemuted voor ${muteTime}`);

    const muteChannel = message.member.guild.channels.cache.get('688467758853521446');

    var muteEmbed = new discord.MessageEmbed()
    .setColor('#f73115')
      .setTimestamp()
      .addFields(
        { name: 'Gemute', value: `> ${mutePerson} (${mutePerson.id})`},
        { name: 'Gemute door', value: `> ${message.author} (${message.author.id})`},
        { name: "Reden", value: `> ${reden}`},
        { name: "Tijd", value: `> ${tijd}`}
      )
      .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');
    
      muteChannel.send({embeds: [muteEmbed]})

    setTimeout(() => {

        if (!mutePerson.roles.cache.has('882624046251012106')) return;

        mutePerson.roles.remove(muteRole.id);

        message.channel.send(`> ${mutePerson} is geunmute`);

       var muteEmbed = new discord.MessageEmbed()
        .setColor('#f73115')
         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
         .setTimestamp()
         .addFields(
            { name: 'Geunmute persoon', value: `> ${mutePerson} (${mutePerson.id})`},
            { name: 'Geunmute door', value: `> <@866387719428243486>`},
            { name: 'Reden', value: `> Auto`}
          )
       
        muteChannel.send({embeds: [muteEmbed]})

    }, ms(muteTime));

}

module.exports.help = {
    name: "mute",
    category: 'staff',
    description: 'Met dit commando kan een stafflid een lid muten.',
    aliases: []
}