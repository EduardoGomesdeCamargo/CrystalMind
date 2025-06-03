var database = require("../database/config")

function listar(email) {
    var instrucao = `
        SELECT id FROM usuario WHERE email = '${email}';
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

module.exports = {
    cadastrar,
    listar
};