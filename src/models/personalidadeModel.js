var database = require("../database/config")

function listar(fk_personalidade) {
    var instrucao = `
        SELECT * FROM personalidade WHERE id_personalidade = '${fk_personalidade}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}