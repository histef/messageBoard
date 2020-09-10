const express = require('express')
const app = express()
const cors = require('cors')

//middleware time
app.use(cors())
//gets data from clientside uses request.body to get json (data)
app.use(express.json())

app.listen(5000, () => {
  console.log('Port 5000')
})