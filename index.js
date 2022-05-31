const express = require('express')
const path = require('path')
const sequilize = require('./utils/database.js')
const todoRoutes = require('./routes/todo.js')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/todo', todoRoutes)

app.use((req, res, next) => {
    res.sendFile('/index.js')
})

async function start() {
    try {
        await sequilize.sync()
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

start()