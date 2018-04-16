var router = require('express').Router();
var bodyParser = require('body-parser');
var fs = require('fs');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var data = {
    s: 'SMALL',
    m: 'MEDIUM',
    l: 'LARGE'
};

//routes
router.route('/:dataType')
    .get(function(req, res, next) {

        var result;

        console.log(req.params.dataType)

        switch (req.params.dataType) {
            case data.s:
                fs.readFile(__root + 'db/small-data.json',{}, function(err, buf){
                    if (err) return res.status(500).send(err)
                    sendJSON(JSON.parse(buf.toString()))
                })

                break;
            case data.m:
                fs.readFile(__root + 'db/medium-data.json',{}, function(err, buf){
                    if (err) return res.status(500).send(err)
                    sendJSON(JSON.parse(buf.toString()))
                });
                
                break;
            case data.l:
                fs.readFile(__root + 'db/large-data.json',{}, function(err, buf){
                    if (err) return res.status(500).send(err)
                    sendJSON(JSON.parse(buf.toString()))                    
                });
                
                break;
        
            default:
                break;
        }
        function sendJSON(file) {
            res.status(200).send(file);
        }

        
        
    })
    

module.exports = router;