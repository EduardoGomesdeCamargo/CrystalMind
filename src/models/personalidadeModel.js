var database = require("../database/config")

function listar(fk_personalidade) {
    var instrucao = `
        SELECT * FROM personalidade JOIN gem ON id_personalidade = pk_personalidade WHERE id_personalidade = '${fk_personalidade}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPersonalidade(fk_personalidade) {
    var instrucao = `
    SELECT fk_personalidade FROM resultado WHERE fk_usuario = ${fk_personalidade};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listar,
    listarPersonalidade
}