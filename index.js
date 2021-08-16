const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send({result: "Hello World!"})
})

app.get('/secret', (req, res) => {
  res.send(`Secret phrase: ${process.env['SECRET']}`)
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = server