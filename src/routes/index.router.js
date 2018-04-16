var router = require('express').Router();


//routes
router.route('/')
    .get(function(req, res, next) {
        res.status(200).sendFile(__root + "public/index.html")
    })

module.exports = router;