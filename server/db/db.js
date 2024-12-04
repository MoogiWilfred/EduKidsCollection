import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://Moogiwilfred:YKta1W1VcRbYluqA@cluster0.tjcu1op.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("DB Connected Successfully"));

}