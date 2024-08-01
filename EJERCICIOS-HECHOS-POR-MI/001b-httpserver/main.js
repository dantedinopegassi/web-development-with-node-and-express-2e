/*++++++++++++++++++++++++++/
/   pa deployar, usa        /
/   $ node main.js          /
/++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/
/   flashate esta:                                                                      /
/       EL HTTP: primero estableces el protocolo de comunicacion                        /
/           (señales de humo, piñas, tiros calibre 50, una carta, etc)                  /
/       EL PUERTO: despues seteas por donde salen y se reciben los mensajes             /
/           (normalmente, el buzon, pero tenes libertad de usar otras cosas ;)          /
/       EL SERVER: y creas la oficina de correos, y le encomendas que ante cualquier    /
/                  peticion, devuelva ese mensaje del write seguido del end             /
/++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('EHHHH AMIGO!!');
    res.end('Hola wacho');
});

server.listen(port, () => console.log(`puto el que lee, y como te gusta el pito que seguis leyendo en este puerto: ${port};` + `\nYa ta loco, anda a ver el sol... por favor te lo pido, usa Ctrl+C...`));