import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.route.js'

import cookieParser from 'cookie-parser';

const app = express()
app.use(express.json())
app.use(cookieParser())
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to the database')
    })
    .catch((err) => { console.error(err) })

app.listen(3001, (req, res) => {
    console.log('server is running on port 3001')

})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).json({
        success: false,
        message: message,
        statusCode
    })
})


