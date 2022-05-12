var express = require('express');
var router = express.Router();

var Vany = require('../model/Vany');

/* GET products listing. */
router.get('/', async function(req, res, next) {
    console.log("[UsersRoutes] Retrieving all products");
    let result = await Vany.getUsers();
    res.status(result.status).send(result.data);

});

module.exports = router;
