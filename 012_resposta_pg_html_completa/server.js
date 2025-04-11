const http = require("http");
const fs = require("fs");

let port = 3000;
let host = "localhost";

const server = http.createServer((req, res) => {
  // header
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  // preparar o conteúdo de html
  fs.readFile("./html/pg1.html", (err, data) => {
    if (err) {
        console.log(err);
        res.write("ERRO!!!")
        res.end();
    }else
    {
        res.write(data);
        res.end();
    }
  })
});

server.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
