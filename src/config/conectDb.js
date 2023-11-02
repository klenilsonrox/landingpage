import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const port = process.env.DB_PORT
const user = process.env.DB_USER
const pass = process.env.DB_PASS

const mongo_Url= `mongodb+srv://${user}:${pass}@leads.bbiey0t.mongodb.net/`
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

export const conectDB = async ()=>{
    try{
        await mongoose.connect(mongo_Url, options)
        console.log("conectado ao banco mongodb com sucesso.")
    }catch(error){
        console.log("nao foi possivel conectar ao banco")
    }
}