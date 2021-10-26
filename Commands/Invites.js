const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    var inviteEmbed = new discord.MessageEmbed()
     .setTitle("Invites!")
     .setDescription('[TeamDJD YouTube Server.](https://discord.gg/VgejNANPrN) \n - \n [Koninklijke Landmacht Server.](https://discord.gg/s5DnaFZtEq) \n - \n [Koninklijke Marechaussee Server.](https://discord.gg/4fGDD7pagH) \n - \n [DSI Den Haag Stad Server.](https://discord.gg/NSdXwCxhK2) \n - \n [Sollicitatie Server Den Haag Stad.](https://discord.gg/NCHjWjZg96) \n - \n [ESS Den Haag Stad Server.](https://discord.gg/GcPMCrWaar) \n - \n [Politie Den Haag Stad Server.](https://discord.gg/8VUuEkvRe2)')
     .setColor('#f73115')
     .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
     .setTimestamp()
     message.reply({embeds: [inviteEmbed]})

}

module.exports.help = {
    name: "invites",
    category: 'info',
    description: 'Met dit commando geeft alle Discord servers weer.'
}