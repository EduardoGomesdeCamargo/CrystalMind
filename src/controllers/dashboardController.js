var dashboardModel = require("../models/dashboardModel");

function listar(req, res) {
    var fk_personalidade = req.params.fk_personalidade;

    console.log("estamos no dashboard controller")
    if (fk_personalidade == undefined) {
        res.status(400).send("Seu fk_personalidade está undefined!");
    }

    dashboardModel.listar(fk_personalidade).then(function (resultado) {
        res.status(200).json(resultado);
        console.log('id ', resultado[0].id_resultado)
        res.json({
            personalidade: resultado[0].personalidade,
            palavra_chave: resultado[0].palavra_chave,
            sintese: resultado[0].sintese,
            descricao: resultado[0].descricao,
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