<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP LiveReload - Padev</title>
</head>

<body>
    <h1>PHP Live Reload - Padev</h1>

    <script type="module">
        import {
            io
        } from "https://cdn.socket.io/4.5.0/socket.io.esm.min.js";
        const socket = io("http://127.0.0.1:3000");

        socket.emit("watchFile", "<?= $_SERVER['SCRIPT_NAME'] ?>");
        socket.on("reload", () => {
            location.reload();
        });
    </script>
</body>

</html>