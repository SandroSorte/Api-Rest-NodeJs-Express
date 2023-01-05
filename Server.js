import app from "./src/App.js"
import Conexao from './Infra/Conexao.js'

const PORT = 3000

Conexao.connect((erro)=>{
  if(erro){
    console.log(erro)
  }else{
    console.log('conexão realizada com sucesso')
  }
  app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
  })
})
