const app = require("./app");
const dotenv = require('dotenv');
const connectDatabase = require("./config/database");


//config
dotenv.config({path:"backend/config/config.env"});

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server in Working on http://localhost:${process.env.PORT}`)
});

// unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)

    server.close(()=>{
        process.exit(1)
    })
});
