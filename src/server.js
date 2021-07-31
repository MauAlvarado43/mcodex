import express from 'express'
import http from 'http'
import path from 'path'

// Initialzing packages
const app = express()
const server = http.createServer(app)

require('dotenv').config()

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
})

// Settings
app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs')
app.set('views','src/views')

//Routes
app.use(require('./routes/main'))
app.use(require('./routes/fundamentals'))

// Start the server
server.listen(app.get('port'),'0.0.0.0', () => {
    console.log('Server on port', app.get('port'))
})

export default server