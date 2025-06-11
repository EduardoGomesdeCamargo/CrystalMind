//const { listarPopulares } = require("../controllers/dashboardController");
var database = require("../database/config")

function listar(fk_personalidade) {
    var instrucao = `
    SELECT porcentagemExtrovertido,
        porcentagemIntuitivo,
        porcentagemThinking,
        porcentagemPercepcao,
        id_personalidade,
        personalidade,
        id_gem,
        nome 
        FROM gem JOIN personalidade ON id_personalidade = pk_personalidade
        JOIN resultado ON fk_personalidade = id_personalidade WHERE id_personalidade = ${fk_personalidade};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPopulares() {
    var instrucao = `
    SELECT COUNT(personalidade) AS qtdPersonalidade, personalidade, fk_personalidade, nome
	FROM resultado JOIN personalidade ON fk_personalidade = id_personalidade
    JOIN gem ON id_personalidade = pk_personalidade
		GROUP BY fk_personalidade, nome, personalidade ORDER BY qtdPersonalidade DESC LIMIT 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuarios(fk_personalidade) {
    var instrucao = `
    SELECT primeiro_nome, sobrenome FROM usuario JOIN resultado ON id = fk_usuario
	WHERE fk_personalidade = ${fk_personalidade};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarPopulares,
    listarUsuarios
}