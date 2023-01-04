import express from 'express'
const app = express()

//indicar para o express ler body com json
app.use(express.json())

//mock
const cadastro = [
{id:1, nome:'Sandro', idade:36, signo:'escorpiao'},
{id:2, nome:'Maria', idade:26, signo:'cancer'},
{id:1, nome:'Julio', idade:36, signo:'libra'}]

//Rota padrão
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/cadastro',(req, res)=>{
res.send(cadastro)
})

app.post('/cadastro',(req, res)=>{
  cadastro.push(req.body)
  res.send('cadastro realizado com sucesso')
})

export default app

