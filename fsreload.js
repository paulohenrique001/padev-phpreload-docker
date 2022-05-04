import { createServer } from "http";
import { Server } from "socket.io";
import fs from 'fs';

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: ["http://127.0.0.1", "http://localhost"] } });

io.on("connection", (socket) => {
    socket.on("watchFile", (watchFile) => {
        console.log("connection file: " + watchFile);

        // fs.watch('./src', (type, files) => {
        //     console.log(`Houve uma alteração do tipo ${type}`);
        //     console.log(files);

        //     io.emit('reload');
        // });

        fs.watchFile(`./src${watchFile}`, (changeType, file) => {
            console.log(`Houve alteração no arquivo: ${watchFile}`);
            io.emit('reload');
        });
    });
});

httpServer.listen(3000);