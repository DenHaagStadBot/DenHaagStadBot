const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => { 

    fetch('https://www.reddit.com/r/lookatmydog/random/.json').then(resp => resp.json()).then(respOmgevormd => {

        var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
        var dogUrl = `https://www.reddit.com${permaLink}`;
        var dogFoto = respOmgevormd[0].data.children[0].data.url;
        var dogTitle = respOmgevormd[0].data.children[0].data.title;

        var dogEmbed = new discord.MessageEmbed()
            .setTitle(`${dogTitle}`)
            .setURL(`${dogUrl}`)
            .setImage(`${dogFoto}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
            message.reply({embeds: [dogEmbed]})

    }).catch("error", (err) => {
        console.log(err.message);
    })

}

module.exports.help = {
    name: "dog"
}