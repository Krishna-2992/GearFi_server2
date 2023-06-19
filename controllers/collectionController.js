const Collection = require('../models/collectionModel')

exports.createCollection = async (req, res) => {
  try {
    const newCollection = await Collection.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        collection: newCollection,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.getCollections = async (req, res) => {
  try {
    const collections = await Collection.find()
    res.status(200).json({
      status: 'success',
      data: {
        collections,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}
exports.getCollectionById = async (req, res) => {
  try {
    console.log(req.params.id)
    const collection = await Collection.find()
      .where('address')
      .equals(req.params.id)
      // console.log(collection)
    res.status(200).json({
      status: 'success',
      data: {
        collection
      },
    })
  } catch (err) {
    console.log(err)
  }
}
