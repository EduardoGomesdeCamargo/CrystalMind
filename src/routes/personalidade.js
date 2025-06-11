var express = require("express");
const { route } = require("./teste");
var router = express.Router();

var personalidadeController = require("../controllers/personalidadeController");

router.get("/listar/:fk_personalidade", function (req, res) {
    personalidadeController.listar(req, res);    
});

router.get("/listarPersonalidade/:fk_personalidade", function (req, res) {
    personalidadeController.listarPersonalidade(req, res);    
});

module.exports = router;
