const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
app.use(cors());

const route = require('./routes')
const db = require('./config/db')

db.connect();
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})