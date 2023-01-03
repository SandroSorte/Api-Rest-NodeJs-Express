const express = require('express')
const app = express()
const port = 3000

//Rota padrão
app.get('/', (req, res) => {
  res.send('Seja bem vindo aos conhecimentos do NodeJs com o Framework Express')
})

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
