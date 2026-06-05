const crypto = require("crypto");

// Weak / legacy algorithms
crypto.createCipher("des", "key");
crypto.createCipher("des3", "key");
crypto.createHash("sha1");

// RSA signing
crypto.sign("sha256", Buffer.from("msg"), privateKey);
