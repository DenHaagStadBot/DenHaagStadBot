const { Client, Intents, Collection, Interaction } = require('discord.js');
const botConfig = require('./botConfig.json');
const fs = require('fs');
const discord = require("discord.js");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.help.name, command);

    console.log(`• De file ${command.help.name}.js is geladen.`);

}


client.once("ready", async () => {
    console.log(`${client.user.username} | Is online!`);
    client.user.setActivity("Code", { type: "PLAYING" });

    const statusOptions = [
        `Prefix: ${botConfig.prefix} `,
        `Help command: ${botConfig.prefix}help`,
        `Creator: Tristan#5000`

    ]

    let counter = 0;

    //let time = 1 * 60 * 1000;
    let time = 3 * 1000;

    const updateStatus = () => {

        client.user.setPresence({

            status: 'online',
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]

        });

        if (++counter >= statusOptions.length) counter = 0;

        setTimeout(updateStatus, time);

    }
    updateStatus();

});

client.on('messageDelete', async (messageDeleted) => {

    var messageDeletedErrorEmbed = new discord.MessageEmbed()
        .setAuthor(`${messageDeleted.author.tag}`, `${messageDeleted.author.avatarURL({ size: 4096 })}`)
        .addFields(
            { name: 'Bericht gemaakt door', value: `> <@${messageDeleted.author.id}>` },
            { name: 'Bericht', value: `> \`Het bericht was te lang.\`` },
            { name: "Bericht id", value: `> ${messageDeleted.id}` },
            { name: "Verwijderd uit", value: `> ${messageDeleted.channel}` }
        )
        .setTimestamp()
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        .setColor('#f73115');

    var content = messageDeleted.content;

    if (!content) content = 'Geen tekst meegegeven.';

    if (messageDeleted.content.length > 250) return client.channels.cache.get('925789063586390036').send({ embeds: [messageDeletedErrorEmbed] });

    var messageDeletedEmbed = new discord.MessageEmbed()
        .setAuthor(`${messageDeleted.author.tag}`, `${messageDeleted.author.avatarURL({ size: 4096 })}`)
        .addFields(
            { name: 'Bericht gemaakt door', value: `> <@${messageDeleted.author.id}>` },
            { name: 'Bericht', value: `> ${content}` },
            { name: "Bericht id", value: `> ${messageDeleted.id}` },
            { name: "Verwijderd uit", value: `> ${messageDeleted.channel}` }
        )
        .setTimestamp()
        .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        .setColor('#f73115');

    client.channels.cache.get('925789063586390036').send({ embeds: [messageDeletedEmbed] });

});

client.on('interactionCreate', async (interaction) => {

    if (!interaction.isSelectMenu()) {
        return;
    }

    const { customId, values, member } = interaction;

    if (customId === 'role') {

        const component = interaction.component;

        const removed = component.options.filter((option) => {
            return !values.includes(option.value)
        });

        for (var id of removed) {
            member.roles.remove(id.value)
        }

        for (var id of values) {
            member.roles.add(id)
        }

        interaction.reply({
            content: 'Roles updated!',
            ephemeral: true
        })

    }

});

client.on('guildMemberAdd', member => {

    var memberRole = member.guild.roles.cache.get('850652089747374110');

    if (!memberRole) return;

    member.roles.add(memberRole);

    var chatChannel = member.guild.channels.cache.get('850517622340583444');

    if (!chatChannel) return;

    chatChannel.send(`Welcome to the server ${member}!`);

});

client.on('messageCreate', async message => {

    if (message.content === 'hallo') return message.reply('> Hoi, hoe gaat het?');

    if (message.content === 'Hallo') return message.reply('> Hoi, hoe gaat het?');

    if (message.content === 'hoi') return message.reply('> Hallo, hoe gaat het?');

    if (message.content === 'Hoi') return message.reply('> Hoi, hoe gaat het?');

    if (message.content === 'goed') return message.reply('> Fijn om te horen!');

    if (message.content === 'Goed') return message.reply('> Fijn om te horen!');

    if (message.content === 'slecht') return message.reply('> Oei, wat is er aan de hand?');

    if (message.content === 'Slecht') return message.reply('> Oei, wat is er aan de hand?');

    if (message.content === 'pizza') return message.reply('> Pizza met annanas is lekker.');

    if (message.content === 'Pizza') return message.reply('> Pizza met annanas is lekker.');

    if (message.content === 'Kanker') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);
    
    if (message.content === 'kanker') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

    if (message.content === 'wollah') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);
    
    if (message.content === 'Wollah') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

    if (message.content === 'Allah') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

    if (message.content === 'allah') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

})

client.on('messageCreate', async message => {

    if (message.author.bot) return;

    var prefixes = JSON.parse(fs.readFileSync('./Prefixes.json'));

    if (!prefixes[message.guild.id]) {

        prefixes[message.guild.id] = {
            prefix: botConfig.prefix
        };

    }

    var prefix = prefixes[message.guild.id].prefix;

    // var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length));

    if (!commandData) return;

    var arguments = messageArray.slice(1);

    try {

        await commandData.run(client, message, arguments);

    } catch (error) {

        console.log(error);

        await message.reply('> Er was een probleem bij het uitvoeren van het commando.');

    }

});

//client.login(process.env.token);

client.login(botConfig.token)