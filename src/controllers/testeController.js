var testeModel = require("../models/testeModel");
var fk_usuario;
function listar(req, res) {
    testeModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
        fk_usuario = resultado;
        console.log('fkUsuario:' + fk_usuario)
        console.log('fkUsuario:' + resultado)

    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    // Criando variáveis que irão recuperar os valores do arquivo index.html/testePersonalidade.html
    var personalidade = req.body.personalidadeServer;
    var porcentagemExtrovertido = req.body.porcentagemExtrovertidoServer;
    var porcentagemIntrovertido = req.body.porcentagemIntrovertidoServer;
    var porcentagemSensacao = req.body.porcentagemSensacaoServer;
    var porcentagemIntuitivo = req.body.porcentagemIntuitivoServer;
    var porcentagemThinking = req.body.porcentagemThinkingServer;
    var porcentagemFeeling = req.body.porcentagemFeelingServer;
    var porcentagemJulgamento = req.body.porcentagemJulgamentoServer;
    var porcentagemPercepcao = req.body.porcentagemPercepcaoServer;

    // Faça as validações dos valores
    if (personalidade == undefined) {
        res.status(400).send("Sua personalidade está undefined!");
    } else if (porcentagemExtrovertido == undefined) {
        res.status(400).send("Sua porcentagemExtrovertido está undefined!");
    } else if (porcentagemIntrovertido == undefined) {
        res.status(400).send("Sua porcentagemIntrovertido está undefined!");
    } else if (porcentagemSensacao == undefined) {
        res.status(400).send("Sua porcentagemSensacao está undefined!");
    } else if (porcentagemIntuitivo == undefined) {
        res.status(400).send("Sua porcentagemIntuitivo está undefined!");
    } else if (porcentagemThinking == undefined) {
        res.status(400).send("Sua porcentagemThinking está undefined!");
    } else if (porcentagemFeeling == undefined) {
        res.status(400).send("Sua porcentagemFeeling está undefined!");
    } else if (porcentagemJulgamento == undefined) {
        res.status(400).send("Sua porcentagemJulgamento está undefined!");
    } else if (porcentagemPercepcao == undefined) {
        res.status(400).send("Sua porcentagemPercepcao está undefined!");
    }
    testeModel.cadastrar(fk_usuario, personalidade, porcentagemExtrovertido, porcentagemIntrovertido, porcentagemSensacao, porcentagemIntuitivo, porcentagemThinking, porcentagemFeeling, porcentagemJulgamento, porcentagemPercepcao)
        .then(function (resposta) {
            res.status(200).send("Teste criado com sucesso");
        }).catch(function(erro) {
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    listar,
    cadastrar
}