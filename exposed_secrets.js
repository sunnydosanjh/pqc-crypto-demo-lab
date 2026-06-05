// Hardcoded API keys (fake examples)
const AWS_ACCESS_KEY_ID = "AKIAFAKE1234567890";
const AWS_SECRET_ACCESS_KEY = "FAKESECRETKEY1234567890";

const GITHUB_TOKEN = "ghp_FAKEFAKEFAKEFAKEFAKE";

const STRIPE_KEY = "sk_test_FAKEKEY123456";

// Crypto usage (for algorithm detection)
const crypto = require("crypto");

crypto.createHash("md5");
crypto.createHash("sha1");
crypto.createCipher("des", "password");
crypto.generateKeyPairSync("rsa", { modulusLength: 2048 });
