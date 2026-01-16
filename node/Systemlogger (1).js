const os = require('os');
const fs = require('fs');

setInterval(() => {
  const info = `
CPU: ${os.cpus()[0].model}
Memory: ${os.totalmem()}
Platform: ${os.platform()}
------------------------
`;

  fs.appendFile('system.log', info, (err) => {
    if (err) throw err;
    console.log('System info logged');
  });
}, 5000);
