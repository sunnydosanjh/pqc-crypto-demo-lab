const crypto = require("crypto");

// ECC / ECDSA
crypto.createECDH("secp256k1");

crypto.sign("sha256", Buffer.from("data"), privateKey);
crypto.verify("sha256", Buffer.from("data"), publicKey);
