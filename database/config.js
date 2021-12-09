const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:root@cluster0.jc3pb.mongodb.net/players');

        console.log('DB online!');
    } catch (error) {
        console.log(error);
        throw new Error('DB error', error);
    }
}

module.exports = {
    dbConnection
}