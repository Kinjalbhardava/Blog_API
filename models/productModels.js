const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
{
    name:{
        type:String,
        required:[true,"please enter name"]  
    
    },

    id:{
        type:Number,
        required:[true, "please enter post ID"]
    },

    blogType:{
        type:String,
        required:[true, "please enter post type"]
    },

    image:{
        type:String,
        required:[true, "please enter image"]
    },

    description:{
        type:String,
        required:[false]
    }
},

    {
        timestamp: true
    }
)


const Product = mongoose.model('product', productSchema);

model.exports = Product;