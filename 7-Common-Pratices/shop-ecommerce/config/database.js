const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const dbConfig = "mongodb://localhost/fullstack-web";
    const connect = await mongoose.connect(dbConfig);
    console.log(`Mongodb connected: ${connect.connection.host}`);
  } catch (e) {
    console.log("Error connect to mongodb");
  }
};

module.exports = connectDatabase;
