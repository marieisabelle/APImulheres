const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request,response) {
    response.json({
        nome: 'Isabelle Marie',
        imagem: 'https://github.com/marieisabelle.png',
        minibio: 'Nalista de Produto e formanda em Análise e Desenvolvimento de Sistemas.'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)