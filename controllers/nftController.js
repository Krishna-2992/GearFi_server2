const Nft = require('../models/nftModel')
const Collection = require('../models/collectionModel')

exports.createNft = async (req, res) => {
  try {
    const newNft = await Nft.create(req.body)
    const selectedCollection = await Collection.findOne({
      address: req.body.nftAddress,
    })

    selectedCollection.nfts.push(newNft.nftId) // Add the new NFT's nftId to the "NFTs" array

    await selectedCollection.save() // Save the updated collection document

    res.status(201).json({
      status: 'success',
      data: {
        Nft: newNft,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.getNfts = async (req, res) => {
  try {
    const nft = await Nft.find()
    res.status(200).json({
      status: 'success',
      data: {
        nft,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}
exports.getNftById = async (req, res) => {
  try{
    console.log(req.params)
    const nft = await Nft.find(req.params)
    //   .where('address')
    //   .equals(req.params.id)
    //   // console.log(collection)
    res.status(200).json({
      status: 'success',
      data: {
        nft
      },
    })
  }catch(err){
    console.log(err)
  }
}