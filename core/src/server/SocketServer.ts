import { Server } from "net";

class SocketServer {

  listen(port = 3000, host = "localhost") {
    const server = new Server();

    server.listen(port, host);

    server.on("connection", (socket) => {

      const socketInfo = `${socket.remoteAddress}:${socket.remotePort}`;

      socket.setEncoding("utf-8");
      console.log(`${socketInfo} has been conected`);

      socket.on("data", (httpMessage) => {
        console.log(`${socketInfo} has sent \n${httpMessage}`)
      });

      socket.on("close", () => {
        socket.end();
        console.log(`${socketInfo} exited from the server`)
      })
    })
  }
}

export default SocketServer;