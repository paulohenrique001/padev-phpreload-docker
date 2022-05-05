import { Server } from "socket.io";
import express from 'express';
import http from "http";
import cors from 'cors';
import fs from 'fs';

const app = express();
const server = http.createServer(app, { cors: { origin: ["http://127.0.0.1", "http://localhost"] } });
const io = new Server(server);

app.use(cors);

app.get('/', (req, res, next) => {
    let script = `import{io}from"https://cdn.socket.io/4.5.0/socket.io.esm.min.js";const socket=io("http://127.0.0.1:3000"),watchFile=document.querySelector("#padev-phpreload").getAttribute("watchFile");socket.emit("watchFile",watchFile),socket.on("reload",()=>{location.reload()});`;

    res.setHeader("Content-Type", "application/javascript")
    res.writeHead(200);
    res.end(script);
});

io.on("connection", (socket) => {
    socket.on("watchFile", (watchFile) => {
        console.log("connection file: " + watchFile);

        fs.watchFile(`./src${watchFile}`, (changeType, file) => {
            console.log(`Houve alteração no arquivo: ${watchFile}`);
            io.emit('reload');
        });
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server is running on http://127.0.0.1:3000`);
});