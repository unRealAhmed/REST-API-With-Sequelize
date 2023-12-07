const express = require('express')
const { connectDB, sequelize } = require('./db')
const APIroutes = require('./routes')


const app = express()
app.use(express.json())

app.use('/api', APIroutes);

const port = 3000

app.listen(port, async () => {
  console.log(`server is running on port ${port}...`);
  await connectDB()
})
