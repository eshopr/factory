var mongoose = require('mongoose');

var Ingredient = mongoose.model('Ingredient', {
    sku : String,
    productName : String,
    price : String,
    inventory : String,
    image: String,
});
module.exports = {
    	// path: '/api/ingredients',
     //    httpMethod: 'GET',
     //    middleware: [function (req, res) {
    	getIngredients: function(req, res) {
    		console.log(req, res);
            Ingredient.find(function(err, ingredients) {
                    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                    if (err)
                        res.send(err)
                    res.json(ingredients); // return all ingredients in JSON format
            });
        },
        // accessLevel: accessLevels.public
    }
