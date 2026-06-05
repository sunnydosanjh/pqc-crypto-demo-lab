const tls = require("tls");

const options = {
  ciphers: [
    "AES256-SHA",
    "ECDHE-RSA-AES256-GCM-SHA384",
    "DES-CBC3-SHA"
  ].join(":")
};

tls.createServer(options, (socket) => {
  socket.write("secure connection");
});
