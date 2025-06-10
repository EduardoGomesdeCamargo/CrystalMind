var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listar/:fk_personalidade", function (req, res) {
    personalidadeController.listar(req, res);    
});

module.exports = router;
