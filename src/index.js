import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { conectDB } from "./config/conectDb.js"
import routerUsers from "./routes/user-routes.js"
dotenv.config()

const port = process.env.DB_PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", routerUsers)
app.use("/", (req,res)=>{
    res.json({
        status:"ok"
    })
})

conectDB()

app.listen(port || 3000)