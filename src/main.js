import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { foodsRouter } from './routes/foods-routes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(foodsRouter)

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000, () => console.log("Server running"))
}

main()