// var passport =  require('passport')
//     , User = require('../models/User.js');

module.exports = {
    translate: function(req, res, next) {
    	console.log(req);
    	// return req
    	try {
            res.send(req.body);
        }
        catch(err) {
            return res.send(400, err.message);
        }
    },
};