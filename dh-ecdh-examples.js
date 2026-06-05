const crypto = require("crypto");

// DH
crypto.createDiffieHellman(2048);

// ECDH
crypto.createECDH("prime256v1");
