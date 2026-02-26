// ws.js
// sets up a WebSocket server and lets us broadcast messages to clients

import { WebSocketServer } from "ws";  // WebSocket is used to create a WebSocket server

// holds the WebSocket server instance
let wss = null;

// attach websocket server to the http server
const initializeWebSocket = (httpServer) => {
    wss = new WebSocketServer({ server: httpServer });
    
    console.log("WebSocket server initialized");

    // handle new client connections
    wss.on("connection", (socket) => {
        console.log("Client connected to WebSocket");

        // when client disconnects
        socket.on("close", () => {
        console.log("Client disconnected from WebSocket");
        });

        // if client sends a message to us
        socket.on("message", (data) => {
        console.log("Message from client:", data.toString());
        });
    });
}

// function to broadcast a message to all connected clients
const broadcast = (messageObj) => {
    if (!wss) return;

    const msg = JSON.stringify(messageObj);

    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send(msg);
        }
    });
};

export { broadcast };
export default initializeWebSocket;