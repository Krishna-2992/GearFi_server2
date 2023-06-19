const dotenv = require('dotenv')
const mongoose = require('mongoose')
// const dotenv = require('dotenv')

// dotenv.config({ path: './.env' })
const DB = process.env.DATABASE
const connection = mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connection successful')
  })

module.export = connection

