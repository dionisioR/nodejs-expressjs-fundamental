const http = require("http");

const server = http.createServer((req, res) => {
  console.log("efetuado uma requisição no servidor");
  res.write("Requisicao recebida com sucesso!");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Servidor rodando em http://localhost:3000");
});
