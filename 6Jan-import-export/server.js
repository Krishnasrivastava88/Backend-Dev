const os = require('os');
// console.log(os);
console.log(os.arch())
console.log(os.freemem()/(1024**3))
console.log(os.uptime()/3600)
console.log("totoal memory ",os.totalmem()/(1024**3))