const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // return message.reply('> Dit commando is niet in gebruik')

    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Jij kan dit niet').then(msg => {
        setTimeout(() => {
            msg.delete();
        }, 3000);
    });

    if (!args[0]) return message.reply("> Geef een aantal mee van hoeveel berichten je wilt verwijderen.").then(msg => {
        setTimeout(() => {
            msg.delete();
        }, 3000);
    });

    if (args[0] === '100') return message.reply("> Je kan maximum 99 berichten verwijderen.").then(msg => {
        setTimeout(() => {
            msg.delete();
        }, 3000);
    });

    if (Number.isInteger(parseInt(args[0]))) {

        var aantal = parseInt(args[0]) + 1;

        message.channel.bulkDelete(aantal).then(() => {

            if (args[0] == 0) {

                message.channel.send(`> ${message.author} geef een getal groeter dan 0 op.`).then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 3000);
                });

            } else if (args[0] == 1) {

                message.channel.send(`> ${message.author} ik heb 1 bericht verwijderd.`).then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 3000);
                });

            } else {

                message.channel.send(`> ${message.author} ik heb ${args[0]} berichten verwijderd.`).then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 3000);
                });

            }

        });

    } else {
        return message.reply("Geef een getal op.").then(msg => {
            setTimeout(() => {
                msg.delete();
            }, 3000);
        });
    }

}

module.exports.help = {
    name: 'clear',
    category: 'staff',
    description: 'Met dit commando kan een server moderator meerdere berichten verwijderen in 1 keer.',
    aliases: []
}