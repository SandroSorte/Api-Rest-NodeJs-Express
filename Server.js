import app from "./src/App.js"

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
  })