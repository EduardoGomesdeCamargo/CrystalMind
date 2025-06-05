const { atualizar } = require("../controllers/testeController");
var database = require("../database/config")

function listar(id_usuario) {
    var instrucao = `
        SELECT id_resultado FROM resultado WHERE fk_usuario = '${id_usuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar(id_usuario) {
    var instrucao = `
        SELECT porcentagemExtrovertido FROM resultado WHERE fk_usuario = '${id_usuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(fk_usuario, personalidade, porcentagemExtrovertido, porcentagemIntrovertido, porcentagemSensacao, porcentagemIntuitivo, porcentagemThinking, porcentagemFeeling, porcentagemJulgamento, porcentagemPercepcao) {
    var instrucao = `
            INSERT INTO resultado (fk_usuario, personalidade, porcentagemExtrovertido, porcentagemIntrovertido, porcentagemSensacao, porcentagemIntuitivo, porcentagemThinking, porcentagemFeeling, porcentagemJulgamento, porcentagemPercepcao) VALUES (${fk_usuario}, '${personalidade}', '${porcentagemExtrovertido}', '${porcentagemIntrovertido}', '${porcentagemSensacao}', '${porcentagemIntuitivo}', '${porcentagemThinking}', '${porcentagemFeeling}', '${porcentagemJulgamento}', '${porcentagemPercepcao}');
            `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarResultado(id_resultado, fk_usuario, personalidade, personalidade, porcentagemExtrovertido, porcentagemIntrovertido, porcentagemSensacao, porcentagemIntuitivo, porcentagemThinking, porcentagemFeeling, porcentagemJulgamento, porcentagemPercepcao) {
    var instrucao = `
    UPDATE resultado SET personalidade = '${personalidade}', porcentagemExtrovertido = ${porcentagemExtrovertido},  porcentagemIntrovertido = ${porcentagemIntrovertido}, porcentagemExtrovertido = ${porcentagemSensacao},  porcentagemIntrovertido = ${porcentagemIntuitivo},porcentagemExtrovertido = ${porcentagemThinking},  porcentagemIntrovertido = ${porcentagemFeeling}, porcentagemExtrovertido = ${porcentagemJulgamento},  porcentagemIntrovertido = ${porcentagemPercepcao} WHERE id_resultado = ${id_resultado};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    verificar,
    atualizarResultado
};