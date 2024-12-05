import express from 'express'
import cors from 'cors'
import { connectDB } from "./db/db.js"
import itemRouter from './routers/itemrouter.js'


//app config
const app=express()
const port=4000


//dbConnection
connectDB();
//middlewware
app.use (express.json())
app.use(cors())


//api endpoints

app.use('/api/item', itemRouter)
app.use("/images", express.static("uploads"))

app.listen(port,()=>
console.log(`you gat this port running at ${port}`))