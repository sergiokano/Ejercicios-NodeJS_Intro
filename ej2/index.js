const Logger = require('logplease');
const logger = Logger.create('utils');

logger.debug(`Holaa Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando de warnings like champions`);
logger.error(`Algo no está bien!!!`);



let http = require("http");

http.createServer((req, res) =>{

res.writeHead(200, { "Content-Type": "text/html" });

res.end("Mi primer script en The Bridge!!!2");

})

.listen(8080);

