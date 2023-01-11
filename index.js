const express = require('express') // Import top level function of express module
const connectToMongo = require('./db')
const app = express() // creating express application
connectToMongo();
app.use(express.json()) // use to setup middleware for application

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use('/back/renting', require('./routes/renting'))

app.listen(2000, () => {
    console.log(`iNotebook listening on port 2000`)
  })