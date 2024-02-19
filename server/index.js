import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.route.js'

const app = express()
app.use(express.json())
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected to the database')
})
.catch((err)=>{console.error(err)}) 

app .listen(3001, (req,res) => {
    console.log('server is running on port 3001')
                                                                                                                                                                                                                                                                                                                        
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)


