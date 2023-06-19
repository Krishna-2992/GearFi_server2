const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const collectionRouter = require('./routes/collectionRoutes')
const nftRouter = require('./routes/nftRoutes')
const cors = require('cors');


dotenv.config({ path: './.env' })

const db = require('./db')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use('/collection', collectionRouter)
app.use('/nft', nftRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
