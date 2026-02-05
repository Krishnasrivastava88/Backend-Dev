const fs = require('fs');

const readStream = fs.createReadStream('./string/task/log.txt');
const writeStream = fs.createWriteStream('./string/task/logUppercase.txt');

readStream.on('data', (chunk) => {
    let data = chunk.toString().toUpperCase();
    writeStream.write(data);
});

readStream.on('end', () => {
    writeStream.end();
});
