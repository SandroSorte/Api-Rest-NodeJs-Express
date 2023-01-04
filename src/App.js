import express from 'express'
const app = express()

//indicar para o express ler body com json
app.use(express.json())

//mock
const cadastro = [
{id:1, nome:'Sandro', idade:36, signo:'escorpiao'},
{id:2, nome:'Maria', idade:26, signo:'cancer'},
{id:3, nome:'Julio', idade:36, signo:'libra'}]

function buscarSelecaoPorId(id){
  return cadastro.filter(cadastro => cadastro.id == id)
}

function buscarIndexPorId(id){
  return cadastro.findIndex(cadastro => cadastro.id == id)
}

//Rota padrão
app.get('/', (req, res) => {
  res.send('Work in progress Api-Rest-NodeJs-Express')
})

app.get('/cadastro',(req, res)=>{
res.send(cadastro)
})

app.get('/cadastro/:id',(req, res) => {
  res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/cadastro',(req, res)=>{
  cadastro.push(req.body)
  res.send('cadastro realizado com sucesso')
})

app.delete('/cadastro/:id', (req, res)=>{
  let index = buscarIndexPorId(req.params.id)
  cadastro.splice(index, 1)
  res.send(`cadastro com id ${req.params.id} removido com sucesso`)
})

export default app

