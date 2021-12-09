const Player = require('../models/player');

const getPlayers = async (req, res) => {
    const [total, players] = await Promise.all([
        Player.countDocuments(),
        Player.find()
    ])

    res.json({
        msg: 'get API - controller',
        total,
        players
    })
}

const postPlayer = async (req, res) => {
    const { name, time } = req.body;
    const player = new Player({ name, time });

    await player.save();

    res.json({
        msg: 'post API - controller',
        player
    })
}

module.exports = {
    getPlayers,
    postPlayer
}