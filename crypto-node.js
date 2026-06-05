const crypto = require("crypto");

// RSA
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048
});

// AES
crypto.createCipheriv("aes-256-cbc", Buffer.alloc(32), Buffer.alloc(16));

// SHA
crypto.createHash("sha256");
crypto.createHash("sha512");

// MD5 (legacy)
crypto.createHash("md5");
