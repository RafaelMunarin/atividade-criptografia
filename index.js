const readline = require('readline')
const crypto = require('crypto')

const { cifrarSimetrica, decifrarSimetrica } = require('./simetrica')
const { gerarChavesRSA, cifrarChaveRSA, decifrarChaveRSA } = require('./assimetrica')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Qual vai ser o texto? ', (textoOriginal) => {
  const { publicKey, privateKey } = gerarChavesRSA()

  const chaveSimetrica = crypto.randomBytes(32)
  const iv = crypto.randomBytes(16)

  // Cifragem
  const { textoCifrado, authTag } = cifrarSimetrica(textoOriginal, chaveSimetrica, iv)

  const chaveSimetricaCifrada = cifrarChaveRSA(chaveSimetrica, publicKey)

  // Decifragem
  const chaveSimetricaDecifrada = decifrarChaveRSA(chaveSimetricaCifrada, privateKey)

  const textoDecifrado = decifrarSimetrica(textoCifrado, chaveSimetricaDecifrada, iv, authTag)

  // Resultados
  console.log('\n----------\n')
  console.log('Texto Original :', textoOriginal)
  console.log('\n----------\n')
  console.log('Texto Cifrado (em hexadecimal):', textoCifrado)
  console.log('\n----------\n')
  console.log('Texto Decifrado:', textoDecifrado)
  console.log('\n----------\n')
  console.log('Sucesso:', textoOriginal === textoDecifrado)

  rl.close()
})