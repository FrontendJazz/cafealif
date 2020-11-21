import mongoose from "backend/connection/mongoose"
const url= "mongodb+srv://kanadev:chi12321@cluster0.jjesf.mongodb.net/alifcafe?retryWrites=true&w=majority"
mongoose.connection(url, {useUnifiedTopology:true, useNewUrlParser:true})

const connectDB = () =>{
    mongoose.connect(url,  { useUnifiedTopology: true, useNewUrlParser: true})
    mongoose.connection.on ('connected', ()=>{
        console.log('Connect successfully')
    })
}
export default connectDB