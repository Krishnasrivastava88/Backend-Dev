import fs from 'fs';

let errorCount = 0;
let totalLines = 0;

const stream = fs.createReadStream('log.txt', 'utf8');

stream.on('data', (chunk) => {
  const lines = chunk.split('\n');
  totalLines += lines.length;
  lines.forEach(line => {
    if (line.includes('ERROR')) errorCount++;
  });
});

stream.on('end', () => {
  console.log('Total Lines:', totalLines);
  console.log('Total Errors:', errorCount);
});

stream.on('error', (err) => {
  console.error(err.message);
});
