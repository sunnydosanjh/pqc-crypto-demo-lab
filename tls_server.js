const https = require("https");
const fs = require("fs");

/**
 * TLS server for scanner inspection
 * This enables certificate extraction at runtime
 */

const options = {
  key: fs.readFileSync("./rsa_key.pem"),
  cert: fs.readFileSync("./rsa_cert.pem"),

  // Classical TLS only
  minVersion: "TLSv1.2",
  ciphers: [
    "ECDHE-RSA-AES256-GCM-SHA384",
    "AES256-SHA"
  ].join(":")
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("TLS test server");
}).listen(8443);
