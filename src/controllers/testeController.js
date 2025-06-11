const { response } = require("express");
var testeModel = require("../models/testeModel");

// RESGATANDO O ID DA TABLE RESULTADO
function listar(req, res) {

    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {
        res.status(400).send("Seu id do usuário está undefined!");
    }

    testeModel.listar(id_usuario).then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
        console.log('id ', resultado[0].id_resultado)
        res.json({
            id_resultado: resultado[0].id_resultado
        });
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function verificar(req, res) {

    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {
        res.status(400).send("Seu id do usuário está undefined!");
    }

    testeModel.verificar(id_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log('id ', resultado[0].porcentagemExtrovertido)
            res.json({
                porcentagemExtrovertido: resultado[0].porcentagemExtrovertido
            });
        } else if (resultado.length == 0) {
            res.status(204).send("Nenhum valor encontrado.")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    // Criando variáveis que irão recuperar os valores do arquivo index.html/testePersonalidade.html

    var fk_usuario = req.body.fk_usuarioServer;
    var fk_personalidade = req.body.fk_personalidade;
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
    if (porcentagemExtrovertido == undefined) {
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
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else if (fk_personalidade == undefined) {
        res.status(400).send("Seu fk_personalidade está undefined!");
    }

    // COLETANDO ID DO USUARIO
    // testeModel.listar(email).then(function (resultado) {
    //     // precisamos informar que o resultado voltará para o front-end como uma resposta em json
    //     res.status(200).json(resultado[0]);
    //     console.log(resultado[0])
    //     resultado.json({
    //         fk_usuario: resultado[0],
    //     });
    //     console.log('fkUsuario:' + fk_usuario)

    // }).catch(function (erro) {
    //     res.status(500).json(erro.sqlMessage);
    // })

    // INSERINDO RESULTADO
    testeModel.cadastrar(fk_usuario, fk_personalidade, porcentagemExtrovertido, porcentagemIntrovertido, porcentagemSensacao, porcentagemIntuitivo, porcentagemThinking, porcentagemFeeling, porcentagemJulgamento, porcentagemPercepcao)
        .then(function (resposta) {
            res.json(resposta);
            res.status(200).send("Teste criado com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
}

function atualizarResultado(req, res) {
    // Criando variáveis que irão recuperar os valores do arquivo index.html/testePersonalidade.html

    var fk_usuario = req.body.fk_usuarioServer;
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
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    }

    // INSERINDO RESULTADO
    testeModel.atualizarResultado(fk_usuario, personalidade, porcentagemExtrovertido, porcentagemIntrovertido, porcentagemSensacao, porcentagemIntuitivo, porcentagemThinking, porcentagemFeeling, porcentagemJulgamento, porcentagemPercepcao)
        .then(function (resposta) {
            res.status(200).send("Teste criado com sucesso");
                console.log("estou dentro da testeController")

        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    listar,
    verificar,
    cadastrar,
    atualizarResultado
}