import mongoose from 'mongoose'

const dishSchema = mongoose.Schema({
    _id:String,
    name:{type:String, required:true},
    description:{String,required:true},
    price:{type:Number, default:0, required:true},
    image:{type:String,required:true}
})

const Dish = mongoose.model ('dishes', dishSchema)
export default Dish