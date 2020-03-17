const Discord = require('discord.js');
const bot = new Discord.Client;

require("dotenv").config();

const key = process.env.token;

const PREFIX = '!';

bot.on('ready',()=>{
    console.log('this bot is online')
});
bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome new teemo support main student,${member}, come watch the world burn as you watch your enemies die from shrooms`)
});
bot.on('message', message =>{
    // if(message.content === "!Activate")
    //     message.reply('Tendalgo Bot Activated on Node')
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'website':
            message.channel.send('-Tendalgo.io\n-Abhinavnamball.io')
            break;
        case 'info':
                message.channel.send('Tendalgo bot was made by Tendime to test the discord api with Nodejs')
                break;
        case 'version':
                message.channel.send('Version 1.0.1');
                break;
        case 'user':
                const embed = new Discord.MessageEmbed()
                .setTitle('User information')
                .addField('User Name', message.author.username)
                .addField('ID', message.author.tag)
                .setColor(0x0DE898);
                message.channel.send(embed);
                break;
            }
            
})
bot.login(key);