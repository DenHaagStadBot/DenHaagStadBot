const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Alleen de server moderators kunnen ');
   
    if (!args[0]) return message.reply("> Geen staff suggestie meegegeven.")
   
    var suggestions = message.member.guild.channels.cache.get("587601364713209857");

    const suggestieEmbed = new discord.MessageEmbed()
        .setTitle(`Staff suggestie van ${message.author.tag} !`)
        .setColor('#f73115')
        .setDescription("> Staff suggestie: " + args.join(' '))
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

    var msg = await suggestions.send({embeds: [suggestieEmbed]})
    
    await msg.react('✅')
    await msg.react('❌')
    
    

    return message.reply("> Suggestie seccesvol ingezonden!")

  
    message.delete({ timeout: 1000 });

}

module.exports.help = {
    name: "staffsuggestie",
    category: 'staff',
    description: 'Met dit commando dienen staffleden hun suggesties in.'
}