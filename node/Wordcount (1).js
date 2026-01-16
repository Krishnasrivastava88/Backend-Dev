const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  const words = data.trim().split(/\s+/);
  const count = words.length;

  fs.writeFile('output.txt', `Word Count: ${count}`, (err) => {
    if (err) throw err;
    console.log('Word count written to output.txt');
  });
});
