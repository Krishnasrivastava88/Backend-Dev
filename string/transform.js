const fs = require('fs');
const { Transform } = require('stream');

const upper = new Transform({
    transform(chunk, encoding, callback) {
        const modifiedData = chunk.toString().toUpperCase();
        callback(null, modifiedData);
    }
});

const readStream = fs.createReadStream('./string/log.txt');
const writeStream = fs.createWriteStream('./string/infoOutput.txt');

readStream
    .pipe(upper)
    .pipe(writeStream);
