// implement your server here
const express =require('express')

const server = express()

server.use(express.json())

server.use("*", (req, res) => {
    res.status(404).json({
        message:'Not Found'
    })
})

module.exports = server;