const { Schema, model } = require('mongoose');

const PlayerSchema = Schema({
    name: {
        type: String,
        required: [true, 'required']
    },
    time: {
        type: Number,
        required: [true, 'required']
    }
});

module.exports = model( 'Player', PlayerSchema );