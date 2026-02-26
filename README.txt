
# Real-Time Network Traffic Visualizer (Backend Foundation)

## High-Level Build Order (Skeleton Plan)

We are building this system in layers:

1. server.js (Entry point)
2. mongo.js (Database connection)
3. ws.js (WebSocket real-time communication)
4. Packet model (MongoDB schema)
5. Traffic simulation or real socket apps
6. Frontend visualization (3d-force-graph)
7. Packet inspection & querying

We are currently on Step 1: server.js


---

# Step 1: server.js

## Why This File Was Created

The server.js file is the entry point of the backend application.

It is responsible for:

- Starting the Express server
- Creating the HTTP server
- Attaching the WebSocket layer
- Connecting to MongoDB
- Defining the application startup flow

This file acts as the foundation of the entire backend system.

Without this file:
- The server would not run
- The database would not connect
- WebSocket communication would not function


---

## Purpose of server.js

server.js sets up the core infrastructure needed for:

- Real-time communication (WebSockets)
- API routes (Express)
- Database logging (MongoDB)
- Future traffic simulation and packet handling

It ensures all backend systems start in the correct order:

1. Load environment variables
2. Create Express app
3. Apply middleware
4. Create HTTP server
5. Attach WebSocket server
6. Connect to MongoDB
7. Start listening on a port


---

## What This Enables Moving Forward

By completing server.js, we now have:

- A running backend server
- A structured startup process
- A shared HTTP + WebSocket server setup
- A place to expand the system safely

This is the architectural backbone of the project.


---

Next Step:
Create mongo.js to establish the MongoDB connection layer.

---

# Project Structure (Current State)

network-traffic-visualizer/
  backend/
    package.json
    src/
      server.js

---

# Backend Configuration Details

## package.json

The backend project was initialized using:

    npm init -y

We configured:

    "type": "module"

This allows us to use modern ES Module syntax:

    import express from "express";

instead of CommonJS:

    const express = require("express");

Dependencies installed:

- express (web framework)
- cors (cross-origin support)
- dotenv (environment variables)
- ws (WebSocket support)
- mongoose (MongoDB integration)

---

# Development Environment Setup

The backend is running inside:

- WSL (Windows Subsystem for Linux)
- Ubuntu
- Node.js v24+

Git was configured with:

- user.name
- user.email

The repository is connected to:

https://github.com/ParticleGeorge/3d-Force-Graph-Project

---

# Current System Status

✔ Backend project initialized  
✔ ES Modules configured  
✔ Dependencies installed  
✔ server.js implemented  
✔ GitHub repository connected  
✔ Initial commit pushed  

---

# Architectural Notes

We are building this system from the inside out:

1. Infrastructure (server.js)
2. Persistence layer (MongoDB)
3. Real-time communication (WebSocket)
4. Data modeling (Packet schema)
5. Traffic simulation
6. Visualization layer

This approach ensures the data pipeline is solid before building UI components.

---

Next Step:
Create backend/src/mongo.js to establish the database connection layer.

---

# Step 2: MongoDB Connection Layer (mongo.js)

## Purpose

The mongo.js file establishes the database connection layer for the backend.

This allows the system to:

- Connect to MongoDB using environment variables
- Fail fast if the database is unavailable
- Prepare for packet storage and querying

## Why This Was Built Now

Before implementing packet logging or traffic simulation, the system needs a reliable data persistence layer.

By building the MongoDB connection early:

- We ensure the backend architecture supports data storage
- We prevent future restructuring
- We can safely log packets once they are generated

## Current Behavior

When the server starts:

1. dotenv loads environment variables
2. WebSocket server initializes
3. MongoDB connection is attempted
4. If MongoDB is not running, the server exits with a clear error

This confirms:

- Environment configuration is working
- Mongoose is properly installed
- The backend is correctly wired to attempt database communication

---

# Step 3: WebSocket Layer (ws.js)

## Purpose

The ws.js file establishes real-time communication between the backend and any connected clients.

It:

- Attaches a WebSocket server to the existing HTTP server
- Tracks connected clients
- Allows broadcasting messages to all connected clients
- Logs client connections and disconnections

## Why This Is Important

The core goal of this project is to visualize network traffic in real time.

The WebSocket layer will:

- Stream packet events to the frontend
- Allow animated flows between nodes
- Support different transmission rates (Hz)
- Enable live system simulation

This forms the real-time backbone of the application.

---

# Current Backend Status

✔ Express server running  
✔ WebSocket server initialized  
✔ MongoDB connection layer implemented  
✔ Environment configuration secured  
✔ Project structure organized and version controlled  

The backend foundation is complete.

Next Step:
- Install or configure MongoDB
- Create Packet schema (data model)
- Begin traffic simulation layer
