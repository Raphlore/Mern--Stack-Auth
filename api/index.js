import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to main DB')
})
.catch((err) => {
  console.log(err)
})



const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173' // Replace with your frontend URL
}));

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)