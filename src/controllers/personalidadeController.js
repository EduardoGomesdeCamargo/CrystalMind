var personalidadeModel = require("../models/personalidadeModel");

function listar(req, res) {
    var fk_personalidade = req.params.fk_personalidade;

    console.log("estamos no personalidade controller")
    if (fk_personalidade == undefined) {
        res.status(400).send("Seu fk_personalidade está undefined!");
    }

    personalidadeModel.listar(fk_personalidade).then(function (resultado) {
        res.status(200).json(resultado);
        console.log('id ', resultado[0].id_resultado)
        res.json({
            id_personalidade: resultado[0].id_personalidade,
            personalidade: resultado[0].personalidade,
            palavra_chave: resultado[0].palavra_chave,
            sintese: resultado[0].sintese,
            descricao: resultado[0].descricao,
            id_gem: resultado[0].id_gem,
            nome: resultado[0].nome,
            sintese_gem: resultado[0].sintese_gem,
            descricao_gem: resultado[0].descricao_gem
        });
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })

}

module.exports = {
    listar,
}