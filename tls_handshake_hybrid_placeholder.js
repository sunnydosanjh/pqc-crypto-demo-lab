const tls = require("tls");

/**
 * NOTE:
 * No post-quantum key exchange mechanisms configured.
 * No ML-KEM / Kyber / hybrid TLS enabled.
 */

const options = {
  minVersion: "TLSv1.3",

  // Classical ECDHE only (no PQC hybrid)
  ciphers: [
    "TLS_AES_256_GCM_SHA384",
    "TLS_CHACHA20_POLY1305_SHA256"
  ].join(":"),

  // Explicitly missing:
  // - ML-KEM (Kyber)
  // - Hybrid X25519 + PQC
};

const server = tls.createServer(options, (socket) => {
  socket.write("TLS 1.3 without PQC support");
  socket.end();
});

server.listen(8444);
