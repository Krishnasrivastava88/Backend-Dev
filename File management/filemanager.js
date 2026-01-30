import fs from 'fs';
import path from 'path';

const [, , command, fileName, content] = process.argv;
const filePath = path.resolve(fileName || '');

switch (command) {
  case 'read':
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return console.error(err.message);
      console.log(data);
    });
    break;

  case 'write':
    fs.writeFile(filePath, content || '', (err) => {
      if (err) return console.error(err.message);
      console.log('File written successfully');
    });
    break;

  case 'copy':
    fs.copyFile(filePath, path.resolve(content), (err) => {
      if (err) return console.error(err.message);
      console.log('File copied');
    });
    break;

  case 'delete':
    fs.unlink(filePath, (err) => {
      if (err) return console.error(err.message);
      console.log('File deleted');
    });
    break;

  case 'list':
    fs.readdir(filePath, (err, files) => {
      if (err) return console.error(err.message);
      console.log(files);
    });
    break;

  default:
    console.log('Commands: read | write | copy | delete | list');
}
