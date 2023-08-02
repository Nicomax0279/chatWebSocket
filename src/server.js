
// import express from 'express'
// import {Server} from 'socket.io'
const express = require('express')
const {Server} = require('socket.io')

const app = express()
const PORT = process.env.PORT || 8080


app.use(express.json());
app.use(express.urlencoded({extended:true}))
    app.use(express.static(__dirname+"/public"));

const server = app.listen(PORT,()=>console.log(`listening on PORT: ${PORT}`))
//io: wedsocket Servers

const io = new Server(server);
const historicoMensajaes = [];
io.on("connection",(socket)=>{
    socket.emit("menssageFromServer", "se ha conectao existosamente")
    console.log(socket.id)
    socket.broadcast.emit("newUser",socket.id)
    socket.emit("menssages",historicoMensajaes)

    socket.on("message",(data)=>{
        console.log(req)
        data.email = req
        console.log(data)
        historicoMensajaes.push(data)
        io.sockets.emit("menssages",historicoMensajaes)
    })

    

})