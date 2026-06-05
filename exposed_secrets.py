# Fake exposed secrets
AWS_SECRET_ACCESS_KEY = "FAKEAWSSECRET123"
DATABASE_PASSWORD = "password123"
PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----FAKE-----END PRIVATE KEY-----"

from cryptography.hazmat.primitives.asymmetric import rsa

rsa.generate_private_key(public_exponent=65537, key_size=2048)
