const discord = require("discord.js");
const botConfig = require('../botConfig.json');

module.exports.run = async (client, message, args, err) => {

    if (!args[0]) return message.reply("> Gebruik ,commands \`general, info, games, staff\`."); 

    var prefix = botConfig.prefix;

    var general = 'General\n';
    var info = '\nInformation\n';
    var game = '\nGame\n';
    var staff = 'Staff Commands\n';

    client.commands.forEach(command => {

        switch (command.help.category) {

            case 'general':
                general += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                break;

            case 'info':
                info += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                break;

            case 'game':
                game += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                break;

            case 'staff':
                staff += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                break;
        }

    });

        var generalEmbed = new discord.MessageEmbed()
            .setTitle('General Commands.')
            .setDescription(`${general}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
    
        var informationEmbed = new discord.MessageEmbed()
            .setTitle('Information Commands')
            .setDescription(`${info}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

        var gameEmbed = new discord.MessageEmbed()
            .setTitle(`Game Commands`)
            .setDescription(`${game}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

        var staffEmbed = new discord.MessageEmbed()
            .setTitle(`Staff Commands`)
            .setDescription(`${staff}`)
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

    if (args[0].toUpperCase() == "GENERAL") {

        return message.reply({embeds: [generalEmbed]}); 

    }else if (args[0].toUpperCase() == "INFO") {

        return message.reply({embeds: [informationEmbed]});

    }else if (args[0].toUpperCase() == "GAMES") {

        return message.reply({embeds: [gameEmbed]});

    }else if (args[0].toUpperCase() == "STAFF") {

        if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Alleen een server moderator kan dit commando gebruiken.');

        return message.reply({embeds: [staffEmbed]});

    }

}

module.exports.help = {
    name: 'commands',
    category: 'info',
    description: 'Met dit commando geeft de bot alle commands.',
    aliases: []
}