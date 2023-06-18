const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose.connect(process.env.DB_URI);
  console.log(`Mongodb connected with server: ${mongoose.connection.host}`);
};

module.exports = connectDatabase;
