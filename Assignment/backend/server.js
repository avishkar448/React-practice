import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import colors from 'colors'
import morgan from 'morgan'
import connectDb from './config/db.js'
import orderRoute from './routes/orderRoute.js'

//config 
dotenv.config()

//database Connection
connectDb();

//
const app=express();

//middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

//controller
app.get('/test',(req,res)=>{ 
    res.send("Hello Avishkar")
})

app.use("/api/v1/orders",orderRoute)
const PORT= 8080 || process.env.PORT;

app.listen(PORT,()=>{ 
    console.log(`Server is running at PORT ${PORT}`.bgGreen.white)
});

