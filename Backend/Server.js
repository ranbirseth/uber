const http = require('http');
const app = require('./App');
const port = process.env.PORT || 3000 ;

const server = http.createServer(app);

server.listen(port , ()=>{
console.log(`server is runing on port ${port}`);
});