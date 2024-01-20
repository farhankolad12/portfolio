const express = require("express");
const connectToDatabase = require("./config/connectToDatabase");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

connectToDatabase();

app.use(express.json());

// Import Routes
const blogsRoute = require("./routes/blogsRoute");

app.use("/api", blogsRoute);

app.listen(4000);
