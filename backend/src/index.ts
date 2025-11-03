import express from 'express'

const app = express()
const port = 3000
let isLaunched = true

app.get('/', (req, res) => {
  res.send(isLaunched)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})