from cryptography import x509
from cryptography.hazmat.backends import default_backend

with open("rsa_cert.pem", "rb") as f:
    cert = x509.load_pem_x509_certificate(f.read(), default_backend())

print("Not Valid Before:", cert.not_valid_before)
print("Not Valid After:", cert.not_valid_after)

# Quantum classification hint
print("Algorithm:", cert.signature_algorithm_oid)
