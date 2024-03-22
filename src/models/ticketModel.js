import { Schema,model } from "mongoose";

const productSchema = new Schema({
    barcode:{
        type:String,
        unique:true,
        required:true
    },
    origen:String,
    destino:String,
    price:Number,
    exit:String,
    line:String,
    seat:Number
},{
    timestamps:true,
    versionKey:false
}

)

export default model('tickets', productSchema);