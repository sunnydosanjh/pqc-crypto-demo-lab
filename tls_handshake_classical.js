const tls = require("tls");

const options = {
  minVersion: "TLSv1.2",
  maxVersion: "TLSv1.2",

  // Classical cipher suites only (intentional)
  ciphers: [
    "ECDHE-RSA-AES256-GCM-SHA384",
    "ECDHE-ECDSA-AES128-GCM-SHA256",
    "AES256-SHA",
    "DES-CBC3-SHA"
  ].join(":"),

  honorCipherOrder: true
};

const server = tls.createServer(options, (socket) => {
  socket.write("TLS 1.2 classical handshake active");
  socket.end();
});

server.listen(8443);
