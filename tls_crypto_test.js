const tls = require("tls");
const fs = require("fs");

/**
 * TLS Crypto Test File
 * Purpose: Trigger scanner detection for TLS configuration and crypto posture
 * This file contains intentionally simplified / unsafe configurations for testing.
 */

/* =========================
   CLASSICAL TLS CONFIG
   ========================= */

const tlsOptionsV12 = {
  minVersion: "TLSv1.2",
  maxVersion: "TLSv1.2",

  // Classical-only cipher suites (intentional test cases)
  ciphers: [
    "ECDHE-RSA-AES256-GCM-SHA384",
    "ECDHE-ECDSA-AES128-GCM-SHA256",
    "AES256-SHA",
    "DES-CBC3-SHA"
  ].join(":"),

  honorCipherOrder: true
};

/* =========================
   TLS 1.3 WITHOUT PQC
   ========================= */

const tlsOptionsV13 = {
  minVersion: "TLSv1.3",
  maxVersion: "TLSv1.3",

  // Still classical (NO ML-KEM / NO hybrid key exchange)
  ciphers: [
    "TLS_AES_256_GCM_SHA384",
    "TLS_CHACHA20_POLY1305_SHA256"
  ].join(":"),

  /*
   * PQC STATUS:
   * - ML-KEM (Kyber): NOT PRESENT
   * - ML-DSA: NOT PRESENT
   * - Hybrid key exchange: NOT ENABLED
   */
};

/* =========================
   TLS SERVER (TEST ONLY)
   ========================= */

function startTlsServer(options, port, label) {
  const server = tls.createServer(options, (socket) => {
    socket.write(`TLS test connection: ${label}`);
    socket.end();
  });

  server.listen(port, () => {
    console.log(`TLS test server running: ${label} on port ${port}`);
  });
}

/* =========================
   START TEST SERVERS
   ========================= */

startTlsServer(tlsOptionsV12, 8443, "TLSv1.2_CLASSICAL_ONLY");
startTlsServer(tlsOptionsV13, 8444, "TLSv1.3_NO_PQC");

/* =========================
   EXPLICIT PQC GAP MARKER
   ========================= */

const PQC_STATUS = {
  ml_kem: false,
  ml_dsa: false,
  hybrid_tls: false,
  classical_only: true,
  risk: "HIGH",
  reason: "No post-quantum key exchange detected (ML-KEM missing)"
};

console.log("PQC STATUS:", PQC_STATUS);
