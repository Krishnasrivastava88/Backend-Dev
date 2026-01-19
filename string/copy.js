const fs = require('fs');

const readStream = fs.createReadStream('./string/output.txt');
const writeStreamCopy = fs.createWriteStream('./string/pipedOutput.txt');

// piping - one-line copy
readStream.pipe(writeStreamCopy);

// Alternative non-pipe method:
// readStream.on('data', (chunk) => writeStreamCopy.write(chunk));
// readStream.on('end', () => writeStreamCopy.end());
