const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 2000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.post('/opportunity', db.insertopportunity)


app.listen(2000, () => {
  console.log(`Server is running.`);
});
