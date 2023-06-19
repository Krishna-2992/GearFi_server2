const express = require('express')
const nftController = require('../controllers/nftController')

const router = express.Router()

router.route('/')
.get(nftController.getNfts)
.post(nftController.createNft)

router.route('/:nftId')
.get(nftController.getNftById)

module.exports = router
