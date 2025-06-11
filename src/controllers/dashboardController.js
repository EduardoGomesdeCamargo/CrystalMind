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
            porcentagemExtrovertido: resultado[0].porcentagemExtrovertido,
            porcentagemIntuitivo: resultado[0].porcentagemIntuitivo,
            porcentagemThinking: resultado[0].porcentagemThinking,
            porcentagemPercepcao: resultado[0].porcentagemPercepcao,
            id_personalidade: resultado[0].id_resultado,
            personalidade: resultado[0].personalidade,
            id_gem: resultado[0].id_gem,
            nome_gem: resultado[0].nome,
        });
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })

}

function listarPopulares(req, res) {

    dashboardModel.listarPopulares().then(function (resultado) {
        res.status(200).json(resultado);
        console.log('id ', resultado[0].id_resultado)

    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })

}


function listarUsuarios(req, res) {
    var fk_personalidade = req.params.fk_personalidade;

    if (fk_personalidade == undefined) {
        res.status(400).send("Seu fk_personalidade está undefined!");
    }

    dashboardModel.listarUsuarios(fk_personalidade).then(function (resultado) {
        res.status(200).json(resultado);
        console.log('id ', resultado[0].id_resultado)

    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })

}

module.exports = {
    listar,
    listarPopulares,
    listarUsuarios
}