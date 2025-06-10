var database = require("../database/config")

function listar(fk_personalidade) {
    var instrucao = `
        SELECT personalidade, palavra_chave, sintese, descricao, nome, sintese_gem, descricao_gem FROM personalidade JOIN gem ON id_personalidade = pk_personalidade WHERE id_personalidade = ${fk_personalidade};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
}