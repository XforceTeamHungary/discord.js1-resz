const Discord = require("discord.js");
const bot = new Discord.Client({disableMentions: 'everyone'});
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");

const prefix = botconfig.prefix;

bot.on("ready", async() => {
    console.log("Tutoriál bot elindult!")
    console.log("Tutoriál bot elindult!")
    console.log("Tutoriál bot elindult!")
    console.log("Tutoriál bot elindult!")
    console.log("Tutoriál bot elindult!")

    let státuszok = [
        `Prefix: ${prefix}`,
        "Tutoriál"
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 5555)

    bot.on("message", async message => {
        let MessageArray = message.content.split(" ");
        let cmd = MessageArray[0];
        let args = MessageArray.slice(1);

        if(cmd === `${prefix}hello`){
            message.reply("Szia!")
        }
    
        if(cmd === `${prefix}Hello`){
            message.reply("Szia!")
        }

        if(cmd === `${prefix}ping`){
            let pingEmbed = new Discord.MessageEmbed()
            .setTitle("**Ping**")
            .addField("Pong", "Muszáj valamit megadni, mert undefined lesz!")

            message.channel.send(pingEmbed)
        }
    })
})

bot.login(tokenfile.token);