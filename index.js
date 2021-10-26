const { Client, Intents, Collection, Interaction } = require('discord.js');
const botConfig = require('./botConfig.json');
const fs = require('fs');

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
});

//client.on('interactionCreate', async (interaction) => {

//    if (interaction.isButton()) {
//        if (interaction.customId === 'test') {
//            interaction.reply('Je hebt op de test geklikt.');
//        } else {
//            interaction.reply('Fout.');
//        }
//   }

//});

client.on('guildMemberAdd', member => {

    var memberRole = member.guild.roles.cache.get('850652089747374110');

    if (!memberRole) return;

    member.roles.add(memberRole);

    var chatChannel = member.guild.channels.cache.get('850517622340583444');

    if (!chatChannel) return;

    chatChannel.send(`Welcome to the server ${member}!`);

});


client.on("messageCreate", async message => {

    if (message.author.bot) return;

    var prefix = botConfig.prefix;

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

bot.login(process.env.token);