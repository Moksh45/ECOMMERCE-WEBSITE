const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");
    console.log(`Mongodb connected with server: ${mongoose.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDatabase;