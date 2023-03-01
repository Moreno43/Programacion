const express = require('express')
const app = express()
const host = "localhost"
const port = 8000

app.listen(host, port,()=> console.log(`https://${host}:${port}`))