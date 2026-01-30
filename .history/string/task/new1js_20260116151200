const http = require('http');
const fs = require('fs');
const { Transform } = require('stream');

// STEP 4: LOGGING WRITE STREAM
const logStream = fs.createWriteStream('access.log', { flags: 'a' });

// Transform stream 1: Convert text to uppercase
const UpperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upper = chunk.toString().toUpperCase();
    callback(null, upper);
  }
});

// Transform stream 2: Replace vowels with *
const VowelReplaceTransform = new Transform({
  transform(chunk, encoding, callback) {
    const modified = chunk.toString().replace(/[aeiouAEIOU]/g, '*');
    callback(null, modified);
  }
});

// HTTP SERVER
const server = http.createServer((req, res) => {

  // STEP 4: Logging every request
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  logStream.write(logEntry);

  // ROUTING
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running");
  }

  else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page");
  }

  else if (req.method === 'GET' && req.url === '/user') {
    const user = {
      name: "Krishna",
      age: 20,
      role: "Developer"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  }

  // STEP 3: POST /uppercase (convert body to UPPERCASE)
  else if (req.method === 'POST' && req.url === '/uppercase') {
    res.writeHead(200, { "Content-Type": "text/plain" });
    req.pipe(new UpperCaseTransform()).pipe(res);
  }

  // STEP 3: POST /process (uppercase + vowel replace)
  else if (req.method === 'POST' && req.url === '/process') {
    res.writeHead(200, { "Content-Type": "text/plain" });
    req
      .pipe(new UpperCaseTransform())
      .pipe(new VowelReplaceTransform())
      .pipe(res);
  }

  // UNKNOWN ROUTES → 404
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// STEP 1: Run server on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
