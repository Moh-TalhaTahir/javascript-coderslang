export const startServer = (server, port) => {
    server.listen(port,() => {
        console.log('waiting for connection on port $port{port}');
    })
}