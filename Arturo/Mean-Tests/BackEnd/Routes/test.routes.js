const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: 'Api Works',
        lino: 'Es puto'
    });
});

module.exports = router;