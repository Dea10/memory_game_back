const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONN);

        console.log('DB online!');
    } catch (error) {
        console.log(error);
        throw new Error('DB error', error);
    }
}

module.exports = {
    dbConnection
}