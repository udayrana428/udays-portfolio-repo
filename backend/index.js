const getuser = require('./middleware/getuser')
const dotenv = require('dotenv')

dotenv.config({ path: "./config.env" })
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 5000

require("./db/connect")



// MiddleWare
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/note"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})