var express = require("express");
var router = express.Router();

var testeController = require("../controllers/testeController");

router.post("/cadastrar", function (req, res) {
    // funcão a ser chamada quando acessar /teste/cadastrar
    testeController.cadastrar(req, res);
});

router.get("/listar/:email", function (req, res) {
    // função a ser criada quando acessar /teste/listar
    testeController.listar(req, res);
})

module.exports = router;