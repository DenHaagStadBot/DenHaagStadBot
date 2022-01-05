const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => { 

    fetch('https://www.reddit.com/r/memes/random/.json').then(resp => resp.json()).then(respOmgevormd => {

        var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
        var memeUrl = `https://www.reddit.com${permaLink}`;
        var memeFoto = respOmgevormd[0].data.children[0].data.url;
        var memeTitle = respOmgevormd[0].data.children[0].data.title;

        var memeEmbed = new discord.MessageEmbed()
            .setTitle(`${memeTitle}`)
            .setURL(`${memeUrl}`)
            .setImage(`${memeFoto}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
        message.reply({embeds: [memeEmbed]})

    }).catch("error", (err) => {
        console.log(err.message);
    })

}

module.exports.help = {
    name: "meme",
    category: 'game',
    description: 'Met dit commando geeft de bot een meme weer.',
    aliases: []
}