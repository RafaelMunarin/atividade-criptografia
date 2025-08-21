const crypto = require('crypto')

function gerarChavesRSA() {
  return crypto.generateKeyPairSync('rsa', { modulusLength: 2048 })
}

function cifrarChaveRSA(chaveSimetrica, chavePublica) {
  return crypto.publicEncrypt(
    {
      key: chavePublica,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    chaveSimetrica
  )
}

function decifrarChaveRSA(chaveCifrada, chavePrivada) {
  return crypto.privateDecrypt(
    {
      key: chavePrivada,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    chaveCifrada
  )
}

module.exports = { gerarChavesRSA, cifrarChaveRSA, decifrarChaveRSA };
