const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has('754443216035643523')) return message.reply('> Jij kan dit niet.');

    var staffInfoEmbed = new discord.MessageEmbed()
        .setColor('f73115')
        .setTitle('Staff Info Den Haag Stad')
        .setDescription('> Welkom bij het staff team! Dit zijn onze staff regels. Als staff heb je punten. Je begind met 0 punten, maar als je de regels overtreed krijgt u min punten! Bij 10 min punten word u ontslagen. Dus zorg er voor dat u geen minpunten krijgt! Als je proef moderator bent heeft u maar 5 strafpunten voordat u ontslagen word.')

    var staffInfoEmbed2 = new discord.MessageEmbed()
        .setColor('f73115')
        .setTitle('**Ticket Regels**')
        .setDescription('> - Je behandeld geen ticket die gaat over jou. -3 \n > - Een klacht over een HR wordt behandeld door een HC+. -2 \n > - Je mengt niet zomaar in een ticket als je het wel wil doen vraag je eerst of je wat mag zeggen in de staff-chat. -1 \n > - Je bent onpartijdig. -2 \n > - Je bent vriendelijk. -4 \n > - Je spreekt de persoon aan met U. -0 \n > - Als HR maak je geen ticket aan zonder toestemming van een HC+. -2 \n > - Je blijt formeel en bent netjes je scheld geen mensen uit. -1 \n > - Tickets claim je niet. -0 \n > - Als je als staff een ticket aanmaakt maakt je geen commando\'s in het ticket. -1 \n > - Één persoon per ticket. Weet degene die het ticket behandeld het even niet meer hoe of wat vraagt die even hulp aan iemand anders. Ga dus niet mengen. -1 \n > - Je copy en paste geen welkom\'s tekst in een ticket. -1')
    
    var staffInfoEmbed3 = new discord.MessageEmbed()
        .setColor('f73115')
        .setTitle('**Gedrag Regels**')
        .setDescription('> - Je scheld niet als HR+ dus ook niet \'wtf\' of \'k*t\'. -3 \n > - Wees altijd onpartijdig, hoor rustig het verhaal van beide partijen. -3 \n > - Je scheld niet met kanker, doe je dat wel kan je vertrekken.-10 \n > - Geen seksuele grappen of opmerkingen. -1 \n > - Je verstoord geen trainingen van een collega. -1 \n > - Je praat niet in caps tegen een speler ook al ben je boos. -4 \n > - Beschuldig niet zomaar een mede HR zonder bewijs. -5 \n > - Je doet niet aan RDM of FRP als staff. -1 \n > - Je stuurt of deelt geen foto\'s, video\'s, geluidsopnames of andere persoonsgegevens van mensen zonder toestemming. -5 \n > - Informeel gedrag wat zorgt voor een slechte naam van onze server. -3')
        
    var staffInfoEmbed4 = new discord.MessageEmbed()
        .setColor('f73115')
        .setTitle('**Overige Regels**')
        .setDescription('> - Je leaved niet tijdens een aanspraak. -1 \n > - Je gaat niet liegen tegen een hogere rang. -5 \n > - Je maakt geen reclame in een prive bericht. -1 \n > - Haal nooit zomaar een warn van een speler weg zonder toestemming van een HC+. -5 \n > - Je zegt geen \'allah akbar\' of iets anders terrorisme gerelateerd. -10 \n > - Je geeft niet zomaar 2 warns voor hetzelfde. -3 \n > - Je tagt de owner niet, tenzij het belangerijk is. -4 \n > - Als je afgemeld bent geef je geen warns, kicks en bans. Ten slotte behandel je ook geen tickets of geef je trainingen. -5 \n > - Een HC+ taggen zonder goede reden. -4 \n > - Je ontkoppelt, servermute of sleept niemand zonder een reden. -3 \n > - Als je iets wilt opnemen zeg je altijd \'Moet er iemands microfoon uitstaan?\'. -5')
        
    var staffInfoEmbed5 = new discord.MessageEmbed()
        .setColor('f73115')
        .setTitle('**Extra Regels**')
        .setDescription('> - Je plant je training 2 uur van te voren in. -0 \n > - Je training mag pas doorgaan als je 2 trainnees hebt. -1 \n > - Als je iemand mute, kickt of bant moet je er een reden bij zetten. -1 \n > - Je Roblox naam moet in je Discord naam staan. Je mag ook je displayname gebruiken. -1')

    var staffInfoEmbed6 = new discord.MessageEmbed()
        .setColor('f73115')
        .setTitle('**Gebruik Van Staff Commands**')
        .setDescription('> - :m - Niet gebruiken. \n > - :n - Gebruik je voor meldingen. \n > - :pm - Mag je altijd gebruiken. \n > - :kick - Alleen gebruiken bij 3 warns, een training verstoren of RDM. \n > - :fly - Alleen gebruiken bij een jail of een training. \n > - :to / :bring / :tp me - Alleen bij een jail, anders toestemming van HC+. \n > - :shutdown - Alleen voor HC+. \n > - :dog - Gebruik je niet. \n > - :tools - Niet gebruiken. Alleen een Glock of P2000 inspawnen. \n > - :freaky - Niet gebruiken. \n > - :ban / :tban / :gameban - Alleen gebruiken met toestemming van een HC+. \n > - :spin - Niet gebruiken. \n > - :btools - HC+. \n > - :sit - Mag je altijd gebruiken. \n > - :blind - Alleen bij meldingen. \n > - :setmessage - Gebruiken voor een message of een training. \n > - :h - Gebruiken voor melding informatie of trainingen.')

    var staffInfoEmbed7 = new discord.MessageEmbed()
        .setColor('f73115')
        .setTitle('**Speciale Ranks**')
        .setDescription('> - Politie Brigadier - Deze haal je door een speciale Try-Out, deze wordt 1 keer in de 2 weken gegeven! \n > - DNR Brigadier - Deze haal je door een speciale Try-Out, deze wordt 1 keer in de 2 weken gegeven! \n > - KMar Opperwachtmeester - Deze haal je door een speciale Try-Out, deze wordt 1 keer in de 2 weken gegeven! \n > - Ambulance Geneeskundige - Deze haal je door een speciale Try-Out, deze wordt 1 keer in de 2 weken gegeven! \n > - DSI Specialicaties - Deze haal je door een speciale try-out van de specialisatie, er zit geen limiet op deze trainingen. \n > - DSI Commandant - Deze haal je door een speciale Commandant Try-Out, er zit geen limiet op deze trainingen. \n > - VP Motoragent - Deze krijg je met een Try-Out. De Try-Out mag wanneer de leidinggevende van de verkeerspolitie het zegt. \n > - VP Brigadier - Deze krijg je met een Try-Out. De Try-Out mag wanneer de leidinggevende van de verkeerspolitie het zegt.')

    var staffInfoEmbed8 = new discord.MessageEmbed()
        .setColor('f73115')
        .setTitle('**B-Tools Gebruik**')
        .setDescription('> - Je gebruikt alleen btools bij toestemming van HC+. Zodra je btools hebt ga je niet lopen kloten, zoal random dingen, smoken, in vuur zetten, deleten. Als wij dit te zien krijgen heb je een staffwarn!')
    
    return message.channel.send({ embeds: [staffInfoEmbed, staffInfoEmbed2, staffInfoEmbed3, staffInfoEmbed4, staffInfoEmbed5, staffInfoEmbed6, staffInfoEmbed7, staffInfoEmbed8] });


}

module.exports.help = {
    name: 'StaffInfoEmbed2007',
    category: 'info',
    description: 'Met dit commando kan je speciale rollen krijgen.',
    aliases: []
}