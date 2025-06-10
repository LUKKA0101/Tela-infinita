// Import necessary packages
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { router as mainRouter } from './router/mainRouter'

// Initialize Express app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())

// Use defined routes from router file
app.use(mainRouter)

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`)
})
