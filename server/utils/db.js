const mongoose = require('mongoose')
const uri = process.env.mongodbURI;


const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`successfully connected to mongo db...`);
    } catch (error) {
        console.log(`could not connect to mongo db.`);
        process.exit(0);
    }
}

module.exports = connectDB;