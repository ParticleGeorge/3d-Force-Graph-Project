// server.js
// entry point for backend server

import http from "http";                    // http is used to create the server and listen for requests
import express from "express";              // express handles getting requests and sending responses
import cors from "cors";                    // cors is used to connect the frontend and backend servers together
import dotenv from "dotenv";                // dotenv is used to load environment variables from a .env file
import connectMongo from ".mongo.js";       // connectMongo is used to connect to the MongoDB database
import initializeWebSocket from "./ws.js";  // initializeWebSocket is to set up the WebSocket server for real-time communication

// load environment variables from .env file
dotenv.config();

// create a web server object
const app = express();

// allow frontend to connect 
app.use(cors());

// parse JSON bodies of incoming requests
app.use(express.json());

// health check
app.get("/health", (req, res) => {
    res.status(200).json({ status: "server is running" });
    });

// create http server
const server = http.createServer(app);

// initialize WebSocket server
initializeWebSocket(server);

// connect to MongoDB database
connectMongo();

// start listening for requests on the specified port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
