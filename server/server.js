const path = require('path')
const express = require('express')

const app = express()
const buildPath = (innerFile) => path.resolve(__dirname, '../build', (innerFile || ''))
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

function startServer() {
  app.use(express.static(buildPath()))

  app.get('*', (req,res) =>{
    res.sendFile(buildPath('index.html'))
  })

  app.listen(port, () => console.log(`starting up on port ${port}`))
}

startServer()