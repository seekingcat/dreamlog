const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// LOAD CONFIG

dotenv.config({path: './config/config.env'})

// CONNECT DATABASE

const connectDB = require('./config/db')
connectDB()


// LOGGING

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// ROUTES

app.use('/', require('./routes/index'))

// SERVER CONNECTION
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} on port ${PORT}`))