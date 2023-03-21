const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected MongoDB successfully');
    } catch (error) {
        console.log(error);
        console.log('Connected MongoDB failed');
        process.exit(1);
    }
};

module.exports = connectDB;
