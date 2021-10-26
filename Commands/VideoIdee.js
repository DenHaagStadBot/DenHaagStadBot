const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
   
    if (!args[0]) return message.reply("> Geen video idee meegegeven.")
   
    var videoIdee = message.member.guild.channels.cache.get("752146763695259659");

    const suggestieEmbed = new discord.MessageEmbed()
        .setTitle(`Video idee van ${message.author.tag} !`)
        .setColor('#f73115')
        .setDescription("> Video idee: " + args.join(" "))
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

    var msg = await videoIdee.send({embeds: [suggestieEmbed]})
    
    await msg.react('✅')
    await msg.react('❌')
    
    

    return message.reply("> Video idee seccesvol ingezonden! Je kan hem vinden in <#752146763695259659>.");

}

module.exports.help = {
    name: "videoidee",
    category: 'info',
    description: 'Met dit commando kan je een video idee aanmaken.'
}