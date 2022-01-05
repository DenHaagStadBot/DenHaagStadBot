const discord = require("discord.js");
const botConfig = require('../botConfig.json');
const moment = require("moment");
const package = require('../package.json');

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply('> Gelive een categorie mee te geven. Kies uit ,help \`commands, gameinfo, serverinfo, botinfo, invite(s), groepen, ecolor, servers\`.')

    // if (!args[0] === 'commands' || 'game' || 'invite' || 'groepen' || 'ecolor') return message.reply('> Je moet kiezen uit ,help \`commands, game, invite(s), groepen\`.')

    if (args[0].toUpperCase() == "GAMEINFO") {

        const gameEmbed = new discord.MessageEmbed()
            .setTitle('Game Informatie')
            .addFields(
                { name: 'Game Creator', value: `> <@486559825984225283>` },
                { name: 'Game Name', value: `> Den Haag Stad` },
                { name: 'Game Link', value: `> [Den Haag Stad](https://www.roblox.com/games/5784855325/Den-Haag-Stad)` },
                { name: 'Game Developers', value: `> <@690126965729918978> \n > <@613688933980831754> \n >  <@527416839211319318> \n > <@722779830025977936> \n > <@340846369701101575> \n > <@452758813053812737>` }
            )
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setColor('#f73115')
            .setTimestamp()
            .setThumbnail('https://cdn.discordapp.com/attachments/562200277248114719/922619599118278706/Dhs.png')
        message.reply({ embeds: [gameEmbed] })

    } else if (args[0].toUpperCase() == "COMMANDS") {

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

        message.reply('> Door problemen met de bot krijgt u alles in 1 keer zonder te kiezen. De bot developer probeert het zo snel mogelijk in orde te brengen! \n -Tristan.')
        return message.reply({embeds: [generalEmbed, informationEmbed, gameEmbed, staffEmbed]});
    } else if (args[0].toUpperCase() == "INVITE") {

        var inviteEmbed = new discord.MessageEmbed()
            .setTitle("Invites!")
            .setDescription('[TeamDJD YouTube Server.](https://discord.gg/VgejNANPrN) \n - \n [Koninklijke Landmacht Server.](https://discord.gg/s5DnaFZtEq) \n - \n [Koninklijke Marechaussee Server.](https://discord.gg/4fGDD7pagH) \n - \n [DSI Den Haag Stad Server.](https://discord.gg/NSdXwCxhK2) \n - \n [Sollicitatie Server Den Haag Stad.](https://discord.gg/NCHjWjZg96) \n - \n [ESS Den Haag Stad Server.](https://discord.gg/GcPMCrWaar) \n - \n [Politie Den Haag Stad Server.](https://discord.gg/8VUuEkvRe2)')
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
        message.reply({ embeds: [inviteEmbed] })

    } else if (args[0].toUpperCase() == "INVITES") {

        var inviteEmbed = new discord.MessageEmbed()
            .setTitle("Invites!")
            .setDescription('[TeamDJD YouTube Server.](https://discord.gg/VgejNANPrN) \n - \n [Koninklijke Landmacht Server.](https://discord.gg/s5DnaFZtEq) \n - \n [Koninklijke Marechaussee Server.](https://discord.gg/4fGDD7pagH) \n - \n [DSI Den Haag Stad Server.](https://discord.gg/NSdXwCxhK2) \n - \n [Sollicitatie Server Den Haag Stad.](https://discord.gg/NCHjWjZg96) \n - \n [ESS Den Haag Stad Server.](https://discord.gg/GcPMCrWaar) \n - \n [Politie Den Haag Stad Server.](https://discord.gg/8VUuEkvRe2)')
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
        message.reply({ embeds: [inviteEmbed] })

    } else if (args[0].toUpperCase() == "GROEP") {

        var inviteEmbed = new discord.MessageEmbed()
            .setTitle("Groepen!")
            .addFields(
                { name: 'Ambulance', value: `> [Ambulance Groep](https://www.roblox.com/groups/7506132/Ambulance-I-Den-Haag-Stad#!/about)` },
                { name: 'Brandweer', value: `> [Brandweer Groep](https://www.roblox.com/groups/7506165/Brandweer-I-Den-Haag-Stad#!/about)` },
                { name: 'Defensie', value: `> Defensie Groep - Krijg je wanneer je de Try-Out hebt gehaald.` },
                { name: 'Dienst Speciale Interventies', value: `> [Dienst Spelciale Interventies Groep](https://www.roblox.com/groups/6962086/Dienst-Speciale-Interventies-I-Den-Haag-stad#!/about)` },
                { name: 'Gemeente', value: `> [Gemeente Groep](https://www.roblox.com/groups/8158231/Gemeente-Den-Haag-Stad#!/about)` },
                { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee Groep](https://www.roblox.com/groups/7506220/Koninklijke-Marechaussee-I-Den-Haag-Stad#!/about)` },
                { name: 'Politie', value: `> [Politie Groep](https://www.roblox.com/groups/6758586/Politie-I-Den-Haag-stad#!/about)` },
                { name: 'Verkeerspolitie', value: `> [Verkeerspolitie Groep](https://www.roblox.com/groups/8230930/Dienst-Infrastructuur)` },
            )
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
        message.reply({ embeds: [inviteEmbed] })

    } else if (args[0].toUpperCase() == "GROEPEN") {

        var inviteEmbed = new discord.MessageEmbed()
            .setTitle("Groepen!")
            .addFields(
                { name: 'Ambulance', value: `> [Ambulance Groep](https://www.roblox.com/groups/7506132/Ambulance-I-Den-Haag-Stad#!/about)` },
                { name: 'Brandweer', value: `> [Brandweer Groep](https://www.roblox.com/groups/7506165/Brandweer-I-Den-Haag-Stad#!/about)` },
                { name: 'Defensie', value: `> Defensie Groep - Krijg je wanneer je de Try-Out hebt gehaald.` },
                { name: 'Dienst Speciale Interventies', value: `> [Dienst Spelciale Interventies Groep](https://www.roblox.com/groups/6962086/Dienst-Speciale-Interventies-I-Den-Haag-stad#!/about)` },
                { name: 'Gemeente', value: `> [Gemeente Groep](https://www.roblox.com/groups/8158231/Gemeente-Den-Haag-Stad#!/about)` },
                { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee Groep](https://www.roblox.com/groups/7506220/Koninklijke-Marechaussee-I-Den-Haag-Stad#!/about)` },
                { name: 'Politie', value: `> [Politie Groep](https://www.roblox.com/groups/6758586/Politie-I-Den-Haag-stad#!/about)` },
                { name: 'Verkeerspolitie', value: `> [Verkeerspolitie Groep](https://www.roblox.com/groups/8230930/Dienst-Infrastructuur)` },
            )
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
        message.reply({ embeds: [inviteEmbed] })

    } else if (args[0].toUpperCase() == "GROUP") {

        var inviteEmbed = new discord.MessageEmbed()
            .setTitle("Groepen!")
            .addFields(
                { name: 'Ambulance', value: `> [Ambulance Groep](https://www.roblox.com/groups/7506132/Ambulance-I-Den-Haag-Stad#!/about)` },
                { name: 'Brandweer', value: `> [Brandweer Groep](https://www.roblox.com/groups/7506165/Brandweer-I-Den-Haag-Stad#!/about)` },
                { name: 'Defensie', value: `> Defensie Groep - Krijg je wanneer je de Try-Out hebt gehaald.` },
                { name: 'Dienst Speciale Interventies', value: `> [Dienst Spelciale Interventies Groep](https://www.roblox.com/groups/6962086/Dienst-Speciale-Interventies-I-Den-Haag-stad#!/about)` },
                { name: 'Gemeente', value: `> [Gemeente Groep](https://www.roblox.com/groups/8158231/Gemeente-Den-Haag-Stad#!/about)` },
                { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee Groep](https://www.roblox.com/groups/7506220/Koninklijke-Marechaussee-I-Den-Haag-Stad#!/about)` },
                { name: 'Politie', value: `> [Politie Groep](https://www.roblox.com/groups/6758586/Politie-I-Den-Haag-stad#!/about)` },
                { name: 'Verkeerspolitie', value: `> [Verkeerspolitie Groep](https://www.roblox.com/groups/8230930/Dienst-Infrastructuur)` },
            )
            .setColor('#f73115')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()
        message.reply({ embeds: [inviteEmbed] })

    } else if (args[0].toUpperCase() == "ECOLOR") {

        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
                .setCustomId('frog')
                .setLabel('Frog.')
                .setStyle('SUCCESS'),

            new discord.MessageButton()
                .setCustomId('twoepkoepchats')
                .setLabel('TwoepKoep Chats.')
                .setStyle('DANGER'),

        );

        var embedColorPrompt = new discord.MessageEmbed()
            .setDescription('Kies tussen de twee bots.')
            .setColor('#f73115')


        message.reply({ embeds: [embedColorPrompt], components: [row] });

        const filter = (interaction) => {
            if (interaction.user.id === message.author.id) return true;
            return interaction.reply("Jij kan dit niet gebruiken.");
        }

        const collector = message.channel.createMessageComponentCollector({
            filter,
            max: 1000
        });

        collector.on("collect", (interactionButton) => {

            const id = interactionButton.customId;

            switch (id) {
                case "frog":
                    return interactionButton.reply('> #6aa75e');
                case "twoepkoepchats":
                    return interactionButton.reply('> #f73115');

            }
        });

    } else if (args[0].toUpperCase() == "SERVERINFO") {

        var botEmbed = new discord.MessageEmbed()
            .setTitle(`${message.guild.name}`)
            .setColor('#f73115')
            .addFields(
                { name: 'Founder', value: `> <@486559825984225283>` },
                { name: 'ID', value: `> ${message.guild.id}` },
                { name: "Bots", value: `> 8` },
                { name: "People", value: `> ${message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size}` },
                { name: "Created on", value: `> ${moment(message.guild.createdAt).format('LL')}` },
                { name: "Joined on", value: `> ${message.member.joinedAt.toString()}` }

            )
            .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
                .setLabel('Link')
                .setStyle('LINK')
                .setURL('https://discord.gg/8Xsh8MpeDh')

        );

        return message.reply({ embeds: [botEmbed], components: [row] });

    } else if (args[0].toUpperCase() == "BOTINFO") {

        var botEmbed = new discord.MessageEmbed()
            .setTitle('Bot information.')
            .setColor('#f73115')
            .addFields(
                { name: 'Bot name', value: `> ${client.user.username}` },
                { name: 'Bot ID', value: `> ${client.user.id}` },
                { name: 'Prefix', value: `> ${botConfig.prefix}` },
                { name: 'Made by', value: `> <@712621794053587016>` },
                { name: 'Created on', value: `> Visual Studio Code` },
                { name: 'Discord.js', value: `> ${package.dependencies["discord.js"]}` },
                { name: 'Platform', value: `> MacOS` },
                { name: 'Last update', value: `> 22 Dec. 2021` },
                { name: 'Created on', value: `> 15 Aug. 2021` }
            )
            .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
                .setLabel('TwoepKoep Chats.')
                .setStyle('LINK')
                .setURL('https://discord.gg/VrWyrpkM6B')

        );

        return message.reply({ embeds: [botEmbed], components: [row] });

    } else if (args[0].toUpperCase() == "SERVERS") {

        var botEmbed = new discord.MessageEmbed()
            .setTitle('Discord Servers Den Haag Stad.')
            .setColor('#f73115')
            .addFields(
                { name: 'YouTube Server', value: `> [YouTube Server](https://discord.gg/Bt94fKAYSB)` },
                { name: 'Sollicitatie Server', value: `> [Sollicitatie Server](https://discord.gg/NCHjWjZg96)` },
                { name: 'Koninklijke Landmacht', value: `> [Koninklijke Landmacht](https://discord.gg/s5DnaFZtEq)` },
                { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee](https://discord.gg/4fGDD7pagH)` },
                { name: 'Dienst Speciale Interventies', value: `> [Dienst Speciale Interventies](https://discord.gg/NSdXwCxhK2)` }
            )
            .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
            .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
            .setTimestamp()

        return message.reply({ embeds: [botEmbed] });
    }

}

module.exports.help = {
    name: "help",
    category: "game",
    description: "Met dit commando zegt de bot een getal tussen de 1 en de 6.",
    aliases: []
}