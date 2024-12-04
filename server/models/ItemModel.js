import mongoose from 'mongoose'

const ItemSchema= new mongoose.Schema({

    name:{
        type:String, required:true
    },
description:{
    type:String, required:true
},
price:{
    type:Number, required:true
},

image:{type:String, required:true},


category:{ type:String, required:true

}

})




const ItemModel= mongoose.models.item || mongoose.model('item',ItemSchema )

export default ItemModel;