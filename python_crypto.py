from cryptography.hazmat.primitives.asymmetric import rsa, ec
from Crypto.PublicKey import RSA
from Crypto.Cipher import DES3
from Crypto.Hash import MD5, SHA1, SHA256, SHA512

# RSA
key = RSA.generate(2048)

# ECC
private_key = ec.generate_private_key(ec.SECP256R1())

# Hashes
MD5.new()
SHA1.new()
SHA256.new()
SHA512.new()
