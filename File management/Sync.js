import fs from 'fs';
import path from 'path';

const src = path.resolve('source');
const dest = path.resolve('backup');

fs.mkdir(dest, { recursive: true }, () => {});

fs.readdir(src, (err, files) => {
  if (err) return console.error(err.message);

  files.forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    fs.copyFile(srcFile, destFile, (err) => {
      if (err) return console.error(err.message);
      console.log(`Synced: ${file}`);
    });
  });
});
