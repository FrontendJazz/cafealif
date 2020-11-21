import express from 'express'
import dotenv from 'dotenv'
import  path from 'path'
import cors from 'cors'
import connectDB from './connection/mongoose.js'
import Dish from "./models/dishModel.js"
dotenv.config()
connectDB()

const server = express()
const PORT=process.env.PORT || 8000
server.use(cors())
server.get('/api/dishes', async (req,res)=>{
   const dishes =await Dish.find({})
    res.json(dishes)
})

server.get('/api/dishes/:id', async (req,res)=>{
  const dish = await Dish.findById(+req.params.id)
    res.json(dish)
})

if (process.env.NODE_ENV === 'production'){
    server.use(express.static(path.join(path.resolve(), '/frontend/build')))
}
server.listen(PORT,  ()=> {
    console.log(`Server is running. Port: 8000`)
})