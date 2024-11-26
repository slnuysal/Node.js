const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>WELCOME INDEX PAGE<h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>WELCOME ABOUT PAGE<h1>");
  } else if (url === "/communication") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>WELCOME COMUNICATION PAGE<h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI<h1>");
  }

  res.end();
});

const port = 4000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
