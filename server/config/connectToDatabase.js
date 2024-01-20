const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`MongoDB connected with server: ${data.connection.host}`);
  });
}

module.exports = connectToDatabase;
