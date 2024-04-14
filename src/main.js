import express from 'express'
import { foodsRouter } from './routes/foods-routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(foodsRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
