const { Router } = require('express');
const { getPlayers, postPlayer } = require('../controllers/players');

const router = Router();

router.get('/', getPlayers);

router.post('/', postPlayer);

module.exports = router;