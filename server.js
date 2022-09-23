const http = require("http")
const app = require('./app')
const db = require('./config/database')

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

db.connect()
