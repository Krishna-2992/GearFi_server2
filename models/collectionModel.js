const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
  COLLECTION: {
    type: String,
    required: [true, 'A Collection must have a Name'],
  },
  address: {
    type: String,
    required: [true, 'A collection must have an address'],
    unique: true,
  },
  img: {
    type: String,
    required: [true, 'A collection must have an image']
  },
  floor_price: {
    type: String, 
    required: [true, 'A collection must have a floor price']
  },
  volume: {
    type: String, 
    required: [true, 'A collection must have a volume']
  },
  nfts: [String]
})

const collection = mongoose.model('collection', collectionSchema)
module.exports = collection

// {
//   "COLLECTION": "BoringApes",
//   "address": "0xc84ac7bf8b4cec60d82fb93dfb61b03d5e4acd39",
//   "img": "https://i.seadn.io/gcs/files/89e9fbd10c6ea185d008c32c6292adb8.jpg?auto=format&dpr=1&w=256",
//   "floor_price": "0.01 ETH",
//   "volume": "73 ETH"
// }