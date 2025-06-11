var express = require("express");
var router = express.Router();

var testeController = require("../controllers/testeController");

router.post("/cadastrar", function (req, res) {
    // funcão a ser chamada quando acessar /teste/cadastrar
    testeController.cadastrar(req, res);
});

router.get("/listar/:id_usuario", function (req, res) {
    // função a ser criada quando acessar /teste/listar
    testeController.listar(req, res);
})

router.get("/verificar/:id_usuario", function (req, res) {
    // função a ser criada quando acessar /teste/listar
    testeController.verificar(req, res);
})

router.post("/atualizarResultado", function (req, res) {
    testeController.atualizarResultado(req, res);
});

module.exports = router;