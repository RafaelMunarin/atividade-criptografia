# atividade-criptografia

## Descrição da Atividade

Esta atividade consiste em implementar um algoritmo de criptografia que utiliza **chave simétrica (AES-GCM)** (para cifrar um texto) e **chave assimétrica (RSA)** (para proteger a chave simétrica)

---

## Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/RafaelMunarin/atividade-criptografia.git
```

2. Acesse a pasta do projeto:

```bash
cd atividade-criptografia
```

3. Execute o programa:

```bash
node index.js
```

5. Digite o texto.
   O programa exibirá:

- Texto original
- Texto cifrado (em hexadecimal)
- Texto decifrado
- Validação se o processo foi bem-sucedido (`true`/`false`)