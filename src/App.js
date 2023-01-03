import express from 'express'
const app = express()

//Rota padrão
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/planos',(req, res)=>{
res.send(' Listas de requisições futuras')
})

export default app

