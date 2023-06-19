const express = require('express')
const collectionController = require('../controllers/collectionController')

const router = express.Router()

router.route('/')
.get(collectionController.getCollections)
.post(collectionController.createCollection)

router.route('/:id')
.get(collectionController.getCollectionById)
// .patch(collectionController.updateCollection)
// .delete(collectionController.deleteCollection)

module.exports = router
