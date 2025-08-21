const crypto = require('crypto')

function cifrarSimetrica(texto, chave, iv) {
  const cipher = crypto.createCipheriv('aes-256-gcm', chave, iv)

  let textoCifrado = cipher?.update(texto, 'utf8', 'hex')
  textoCifrado += cipher?.final('hex')

  const authTag = cipher?.getAuthTag()

  return { textoCifrado, authTag }
}

function decifrarSimetrica(textoCifrado, chave, iv, authTag) {
  const decipher = crypto.createDecipheriv('aes-256-gcm', chave, iv)
  decipher.setAuthTag(authTag)

  let textoDecifrado = decipher?.update(textoCifrado, 'hex', 'utf8')
  textoDecifrado += decipher?.final('utf8')

  return textoDecifrado
}

module.exports = { cifrarSimetrica, decifrarSimetrica };
