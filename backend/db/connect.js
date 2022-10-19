const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: "./config.env" })
// Database Connection
const db = process.env.DATABASE

    try {
      // Connect to the MongoDB cluster
      mongoose.connect(
        db,
        
        () => {
          console.log('Connected to MongoDB');
        }
      );
      
    
    } catch (e) {
      console.log("could not connect");
    }

