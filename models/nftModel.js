const mongoose = require('mongoose')
const nftSchema = new mongoose.Schema({
    nftId:{
        type:Number
    },
    nftAddress:{
        type: String
    },
    sellerAddress:{
        type: String
    },
    metadata:{
        type:JSON
    },
    price:{
        type:Number
    },
    image: {
        type: String, 
        required: [true, "An NFT must have an image"]
    }
})
const nft = mongoose.model('nft', nftSchema)
module.exports = nft
// {
//     "nftId": 437,
//     "nftAddress": 7436,
//     "sellerAddress": 473435,
//     "metadata": "fheu34h",
//     "price": 468
// }