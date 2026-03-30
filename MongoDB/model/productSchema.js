import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxLength:[25]
    },

    category:{
        type:String,
        require:true,
        enum: [
      "Accessories",
      "Laptops",
      "Phones",
      "Tablets",
      "Audio",
      "Wearables",
      "Gaming"
    ]
    },
    price:{
        type:Number,
        require:true,
        min: [1, "Price can't be negative"]
    },
    stock:{
        type:Number,
        require:true
        
    },

    
    specs:{
        type:Object,
        of:String
    },
    tags:{
        type:[{type:String}]
        
    },
    userid:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"User",
        require:true
    },

})



const Product=mongoose.model("products",ProductSchema);
export default Product();