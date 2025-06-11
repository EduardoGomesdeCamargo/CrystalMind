var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listar/:fk_personalidade", function (req, res) {
    dashboardController.listar(req, res);    
});

router.get("/listarPopulares", function (req, res) {
    dashboardController.listarPopulares(req, res);    
});

router.get("/listarUsuarios/:fk_personalidade", function (req, res) {
    dashboardController.listarUsuarios(req, res);
});
module.exports = router;


