// mongo.js
// responsible for connecting to the MongoDB database

import mongoose from "mongoose";  // mongoose is used to connect to MongoDB and define schemas

// function to connect to MongoDB
// async = this function runs asynchronously (because DB connection takes time)
const connectMongo = async () => {

    // get database connection string from environment variables
    const uri = process.env.MONGO_URI;

    // If no URI is provided, log an error and exit
    if (!uri) {
        console.error("Missing MONGODB_URI in .env file");
        process.exit(1);
    }

    // attempt to connect to MongoDB, exit if it fails
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error); 
        process.exit(1); 
    }
};

// export the connectMongo function so it can be used in other files
export default connectMongo;
