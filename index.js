const express = require('express')
const os = require('os')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
   const userInfo=  os.userInfo()
  res.send(userInfo.username)
})
app.get('/chip', (req, res) => {
   const userInfo=  os.cpus()
  res.send(userInfo[0].model)
})

app.get('/', (req, res) => {
   res.send("Try /chip or /user")
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})