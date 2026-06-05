#!/bin/bash

# Generate a self-signed RSA certificate (real structure)
openssl req -x509 -newkey rsa:2048 \
  -keyout rsa_key.pem \
  -out rsa_cert.pem \
  -days 30 \
  -nodes \
  -subj "/CN=localhost"

# Generate ECC certificate
openssl ecparam -genkey -name prime256v1 -noout -out ecc_key.pem

openssl req -x509 -new \
  -key ecc_key.pem \
  -out ecc_cert.pem \
  -days 30 \
  -subj "/CN=localhost-ecc"
