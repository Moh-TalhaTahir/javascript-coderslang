
export const startServer = (port,server) => {
    server.listen(port,() =>{
        console.log(`the server is running on port ${port}`);
    });
}