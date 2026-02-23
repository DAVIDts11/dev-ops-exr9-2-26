const express = require('express')
require('dotenv').config()
const db = require('./db-connection');


const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1>Docker-Compose-Lab</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})