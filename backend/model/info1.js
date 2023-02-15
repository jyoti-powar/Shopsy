const mongoose = require('mongoose')

const wdSchema = new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        cat_id:String,
        cat_name:String,
        pr_id:Number,
        pr_name: String,
        color: String,
        price: Number,
       
       

    }
)




module.exports = mongoose.model('womens',wdSchema)

