const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json');
const prefix = ("/");
var fs = require('fs');

client.login(config.token);   

    

client.on('ready', () => {
     console.log(`Em funcionamento!!!! total de ${client.channels.size} Canais, em ${client.guilds.size} servers, um total de ${client.users.size} usuarios.`);
    client.user.setGame("Tanki Online BR")
});

client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "serviços")) {
    message.channel.sendMessage(`TOMDISC funcionando em total de ${client.channels.size} **canais**, em ${client.guilds.size} servers, um total de ${client.users.size} **usuarios.**`);
    }    
});

client.on('message', function(message) {
    if (message.content.startsWith(config.prefix + "ajuda")) {
     message.author.sendMessage("**Use o Bot de acordo com seu País. // Use the bot according to your country** \n ```diff BR BOT \n - Expulsar membro do servidor: /kickserver @mention \n - Banir membro para sempre do servidor: /banfinish \n - Obter informações do bot: /info \n - Lista de Servidores: /listserver TO LATAM ou /listserver TO European \n - Convidar bot para seu servidor: /invite \n - Mais comandos em breve! \n ``` \n ```diff EN BOT \n - kick server member: /enkick @mention \n - Ban members forever from the server: /enbanfinish @mention \n - Get bot information: /eninfo \n - More commands coming soon! \n - List of servers: /enlistserver TO EUROPEAN or /enlistserver TO LATAM \n - Invite bot to your server: /invite```")
     if (message.content.startsWith(config.prefix + "ajuda"))
     message.channel.sendMessage("Uma mensagem com todos os comandos foi enviada ao seu privado!");
}
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});
client.on('message', msg => {
  console.log('Verificando. ID: %s - Content: %s', msg.id, msg.content);
  if (msg.content === '/votechat')
    msg.channel.send("Verificando...")
      .then(nmsg => nmsg.edit('% 1'))
      .then(nmsg => nmsg.edit('% 2'))
      .then(nmsg => nmsg.edit('% 3'))
      .then(nmsg => nmsg.edit('% 4'))
      .then(nmsg => nmsg.edit('% 5'))
      .then(nmsg => nmsg.edit('% 6'))
      .then(nmsg => nmsg.edit('% 7'))
      .then(nmsg => nmsg.edit('% 8'))
      .then(nmsg => nmsg.edit('% 9'))
      .then(nmsg => nmsg.edit('% 10'))
      .then(nmsg => nmsg.edit('enviando status deste chat ao Moderador'))
      .then(nmsg => nmsg.edit('enviando status deste chat ao Moderador'))
      .then(nmsg => nmsg.edit('enviando status deste chat ao Moderador'))
      .then(nmsg => nmsg.edit('enviando status deste chat ao Moderador'))
      .then(nmsg => nmsg.edit('% 12'))
      .then(nmsg => nmsg.edit('% 13'))
      .then(nmsg => nmsg.edit('% 14'))
      .then(nmsg => nmsg.edit('% 15'))
      .then(nmsg => nmsg.edit('% 16'))
      .then(nmsg => nmsg.edit('% 17'))
      .then(nmsg => nmsg.edit('% 18'))
      .then(nmsg => nmsg.edit('% 19'))
      .then(nmsg => nmsg.edit('% 20'))
      .then(nmsg => nmsg.edit("**Seu relatório foi enviado com sucesso aos Moderadores deste servidor**" ));

});

client.on('message', msg => {
    if (msg.content === '/file commands') {
        msg.channel.send('Finalizando...')
         .then(nmsg => nmsg.edit('1 %'))
          .then(nmsg => nmsg.edit('2 %'))
           .then(nmsg => nmsg.edit('3 %'))
            .then(nmsg => nmsg.edit('finalizando...'))
             .then(nmsg => nmsg.edit('Procurando comandos...'))
              .then(nmsg => nmsg.edit('**Comandos atualizados!** \n **Use o Bot de acordo com seu País. // Use the bot according to your country** \n ```diff BR BOT \n - Expulsar membro do servidor: /kickserver @mention \n - Banir membro para sempre do servidor: /banfinish \n - Obter informações do bot: /info \n - Lista de Servidores: /listserver TO LATAM ou /listserver TO European \n - Convidar bot para seu servidor: /invite \n - Mais comandos em breve! \n ``` \n ```diff EN BOT \n - kick server member: /enkick @mention \n - Ban members forever from the server: /enbanfinish @mention \n - Get bot information: /eninfo \n - More commands coming soon! \n - List of servers: /enlistserver TO EUROPEAN or /enlistserver TO LATAM \n - Invite bot to your server: /invite```'));

                }
})

client.on('message', msg => {
    if (msg.content === '/listserver TO European') {
        msg.channel.send('Procurando...')
         .then(nmsg => nmsg.edit('1 %'))
          .then(nmsg => nmsg.edit('2 %'))
           .then(nmsg => nmsg.edit('3 %'))
            .then(nmsg => nmsg.edit('4 %'))
             .then(nmsg => nmsg.edit('Procurando servidores...'))
              .then(nmsg => nmsg.edit('**Lista de servidores europeus:** \n EN - http://tankionline.com/battle-en.html \n RU - http://tankionline.com/battle-ru.html \n DE - http://tankionline.com/battle-de.html \n PL - http://tankionline.com/battle-pl.html \n'));

                }
})

client.on('message', msg => {
    if (msg.content === '/votefinish') {
        msg.channel.send('Finalizando...')
         .then(nmsg => nmsg.edit('1 %'))
          .then(nmsg => nmsg.edit('2 %'))
           .then(nmsg => nmsg.edit('3 %'))
            .then(nmsg => nmsg.edit('finalizando...'))
             .then(nmsg => nmsg.edit('Análise do Moderador está sendo encerrada.'))
              .then(nmsg => nmsg.edit(' **Análise do Moderador finalizada**.'));

                }
})

client.on('message', msg => {
  console.log('Nenhuma atualização. Seu bot está atualizado!. ID: %s - Content: %s', msg.id, msg.content);
  if (msg.content === '/atualizar') {
    msg.channel.send('Verificando atualizações...')
      .then(nmsg => nmsg.edit('% 1'))
      .then(nmsg => nmsg.edit('% 2'))
      .then(nmsg => nmsg.edit('% 3'))
      .then(nmsg => nmsg.edit('% 4'))
      .then(nmsg => nmsg.edit('% 5'))
      .then(nmsg => nmsg.edit('% 6'))
      .then(nmsg => nmsg.edit('% 7'))
      .then(nmsg => nmsg.edit('% 8'))
      .then(nmsg => nmsg.edit('% 9'))
      .then(nmsg => nmsg.edit('% 10'))
      .then(nmsg => nmsg.edit("**Nenhuma atualização. Bot Atualizado!**."));

  }
});

client.on("message", (message) => {
   
  if (message.author.bot) return;
  if (message.channel.type !== 'text') return;
  if (!message.content.startsWith(config.prefix)) return;
 
  const user = message.mentions.users.first() || message.author;

  if (message.content.startsWith(config.prefix + "comandos")) {
    message.channel.sendMessage(" **Use o Bot de acordo com seu País. // Use the bot according to your country** \n ```diff BR BOT \n - Expulsar membro do servidor: /kickserver @mention \n - Banir membro para sempre do servidor: /banfinish \n - Obter informações do bot: /info \n - Lista de Servidores: /listserver TO LATAM ou /listserver TO European \n - Convidar bot para seu servidor: /invite \n - Mais comandos em breve! \n ``` \n ```diff EN BOT \n - kick server member: /enkick @mention \n - Ban members forever from the server: /enbanfinish @mention \n - Get bot information: /eninfo \n - More commands coming soon! \n - List of servers: /enlistserver TO EUROPEAN or /enlistserver TO LATAM \n - Invite bot to your server: /invite``` ")
  }
 
  if (message.content.startsWith(config.prefix + "info")) {
    message.channel.sendMessage("  **BOT de Moderação no Discord, criado pelo Adriano | Kilgrave#3173** ")
  }

  if (message.content.startsWith(config.prefix + "eninfo")) {
    message.channel.sendMessage("  **Discord Moderation BOT, created by Adriano | Kilgrave#3173** ")
  }

   if (message.content.startsWith(config.prefix + "enlistserver TO European")) {
    message.channel.sendMessage(" **List of european servers:** \n EN - http://tankionline.com/battle-en.html \n RU - http://tankionline.com/battle-ru.html \n DE - http://tankionline.com/battle-de.html \n PL - http://tankionline.com/battle-pl.html \n ")
  }

    if (message.content.startsWith(config.prefix + "enlistserver TO LATAM")) {
    message.channel.sendMessage(" **List of LATAM servers:** \n BR - http://tankionline.com/battle-br.html \n ES - http://tankionline.com/battle-es.html \n ")
  }

    if (message.content.startsWith(config.prefix + "listserver TO LATAM")) {
    message.channel.sendMessage(" **Lista de servidores LATAM:** \n BR - http://tankionline.com/battle-br.html \n ES - http://tankionline.com/battle-es.html \n ")
  }

 if (message.content.startsWith(config.prefix + "invite")) {
    message.channel.sendMessage("  **- Convidar BOT para servidor:** \n **- Invite bot to your server:** \n https://discordapp.com/oauth2/authorize?client_id=337260990624432129&scope=bot&permissions=14 ")
  }


client.on("message", (message) => {
    if (message.content.startsWith("/banfinish")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.ban().then((member) => {
            // Mensagem de sucesso
                 message.channel.send(":warning: " + member.displayName + " foi bloqueado e expulso do servidor para sempre. ");
        }).catch(() => {
             // Mensagem de erro (Desabilitado)
            message.channel.send("Falha no comando");
        });
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("/enbanfinish")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.ban().then((member) => {
            // Mensagem de sucesso
                 message.channel.send(":warning: " + member.displayName + " has been blocked from the server forever. ");
        }).catch(() => {
             // Mensagem de erro (Desabilitado)
            message.channel.send("Command failure.");
        });
    }
});

    if (message.content.startsWith("/kickserver")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Mensagem de sucesso
                 message.channel.send(":warning: " + member.displayName + " foi desconectado do servidor. ");
        }).catch(() => {
             // Mensagem de erro (Desabilitado)
            message.channel.send("Falha no comando");
     });
    }
})


client.on("message", (message) => {
    if (message.content.startsWith("/enkick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Mensagem de sucesso
                 message.channel.send(":warning: " + member.displayName + " Was disconnected from the server. ");
        }).catch(() => {
             // Mensagem de erro (Desabilitado)
            message.channel.send("Command failure.");
    });
    }
});
