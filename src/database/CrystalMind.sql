CREATE DATABASE CrystalMind;
USE CrystalMind;

create table usuario (
	id int primary key auto_increment,
	primeiro_nome varchar(45) NOT NULL,
    sobrenome varchar(45) NOT NULL,
    email varchar(45) UNIQUE NOT NULL,
    senha varchar(45) NOT NULL
);
CREATE TABLE personalidade (
	id_personalidade INT PRIMARY KEY AUTO_INCREMENT,
    personalidade CHAR(4) NOT NULL,
    palavra_chave VARCHAR(20) NOT NULL,
    sintese VARCHAR(200) NOT NULL,
    descricao VARCHAR(8000)
);

CREATE TABLE resultado (
	id_resultado int primary key auto_increment,
    fk_usuario int,
    fk_personalidade INT,
    porcentagemExtrovertido varchar(45),
    porcentagemIntrovertido varchar(45), 
    porcentagemSensacao varchar(45),
    porcentagemIntuitivo varchar(45),
    porcentagemThinking varchar(45),
    porcentagemFeeling varchar(45),
    porcentagemJulgamento varchar(45),
    porcentagemPercepcao varchar(45),
    
    constraint fk_personalidade foreign key(fk_personalidade)
		references personalidade(id_personalidade),
    constraint fk_usuario foreign key (fk_usuario)
		references usuario(id)
);

INSERT INTO personalidade (personalidade, palavra_chave, sintese) VALUES
	('ISTJ', 'Prático', 'Os Práticos são pessoas pragmáticas e focadas em fatos, com uma confiabilidade indiscutível.'),
	('ISFJ', 'Defensor', 'Os Defensores são protetores muito dedicados e acolhedores, sempre prontos para defender quem amam.'),
	('INFJ', 'Apoiador', 'Os Apoiadores são visionários discretos, atuando frequentemente como idealistas inspiradores e incansáveis.'),
	('INTJ', 'Arquiteto', 'Os Arquitetos são pensadores criativos e estratégicos, com um plano para tudo.'),
	('ISTP', 'Virtuoso', 'Os Virtuosos são experimentadores ousados e práticos, mestres em todos os tipos de ferramentas.'),
	('ISFP', 'Aventureiro', 'Os Aventureiros são flexíveis e encantadores, sempre prontos para explorar e experimentar algo novo.'),
	('INFP', 'Mediador', 'Os Mediadores são poéticos, bondosos e altruístas, sempre prontos para apoiar uma boa causa.'),
	('INTP', 'Lógico', 'Os Lógicos são inventores criativos, com uma sede insaciável de conhecimento.'),
	('ESTP', 'Empreendedor', 'Os Empreendedores são pessoas habilidosas, ativas e muito perceptivas, que realmente gostam de se arriscar.'),
	('ESFP', 'Animador', 'Os Animadores são espontâneos, ativos e animados, a vida nunca fica entediante perto deles.'),
	('ENFP', 'Ativista', 'Os Ativistas são animados, criativos, sociáveis e de espírito livre, sempre encontrando um motivo para sorrir.'),
	('ENTP', 'Inovador', 'Os Inovadores são pensadores curiosos e flexíveis, que não resistem a um desafio intelectual.'),
	('ESTJ', 'Executivo', 'Os Executivos são excelentes organizadores, insuperáveis ao gerenciar tanto coisas quanto pessoas.'),
	('ESFJ', 'Cônsul', 'Os Cônsules são muito atenciosos, sociáveis e engajados com a comunidade, sempre dispostos a ajudar.'),
	('ENFJ', 'Protagonista', 'Os Protagonistas são otimistas inspiradores, prontos para agir de acordo com o que consideram correto.'),
	('ENTJ', 'Comandante', 'Os Comandantes são corajosos, criativos e determinados, sempre dando um jeito para tudo.');

CREATE TABLE gem (
	id_gem INT AUTO_INCREMENT,
    pk_personalidade INT,
    PRIMARY KEY(id_gem, pk_personalidade),
    nome VARCHAR(45),
    sintese_gem VARCHAR(350),
    descricao_gem VARCHAR(8000)
);

INSERT INTO gem (pk_personalidade, nome, sintese_gem, descricao_gem) VALUES
	(1, 'Pérola', 'Aparência: Alta, magra, pele clara azulada, cabelo cor de pêssego curto. Usa uma roupa de balé.
Personalidade: Perfeccionista, leal, elegante, insegura, muito dedicada a Rose Quartz.
Curiosidades: Habilidade com espadas; foi criada para servir, mas se libertou para viver por conta própria.','Pérola é uma Gem alta e esguia, com pele azul-clara e cabelos curtos cor de pêssego, sempre arrumados com elegância. Seu visual remete ao balé, refletindo sua postura graciosa e refinada. Extremamente perfeccionista e leal, Pearl valoriza a ordem, o conhecimento e a tradição. No entanto, essa rigidez esconde uma profunda insegurança, resultado de sua antiga função de serva entre as Gems. Sua devoção por Rose Quartz é um dos pilares de sua identidade. Pearl é uma excelente espadachim e estrategista.'),
	(2, 'Diamante Azul', 'Aparência: Alta, imponente, com pele e cabelo azul; trajes reais e olhos normalmente lacrimejando.
Personalidade: Melancólica, compassiva, mas poderosa. Profundamente ligada à dor da perda.
Curiosidades: Sua aura pode induzir tristeza em qualquer ser próximo.', 'A Diamante Azul se destaca por sua aparência majestosa: alta, envolta em vestes esvoaçantes, com pele e cabelo em tons de azul. Sua expressão frequentemente triste reflete seu dom de empatia intensa, sendo capaz de induzir sentimentos de tristeza em outros. Embora seja uma líder poderosa entre os Diamantes, ela é profundamente sensível e guiada por emoções, tendo sido marcada pela perda de Pink Diamond.'),
	(3, 'Safira', 'Aparência: Pequena, com pele azul-clara e cabelo cobrindo um olho; usa um vestido elegante.
Personalidade: Calma, reservada, previsora do futuro. Pensa mais do que sente.
Curiosidades: É a metade racional da fusão com Ruby, formando Garnet.', 'Safira é pequena e serena, com pele azul-clara e longos cabelos que cobrem um dos olhos. Usa um vestido formal que remete à nobreza. Dotada da habilidade de prever o futuro, ela mantém uma postura reservada e racional, servindo de contraponto à impulsividade de Ruby, com quem se funde para formar Garnet. Safira valoriza a estabilidade emocional e o compromisso.'),
	(4, 'Diamante Branco', 'Aparência: Muito alta, pele branca reluzente, olhos pretos com íris brancas. Voz e aparência imponentes.
Personalidade: Inicialmente narcisista e controladora, depois demonstra capacidade de mudança.
Curiosidades: Tem o poder de controlar corpos de outras Gems.', 'Diamante Branco possui uma aura divina: altíssima, de pele branca reluzente, olhos pretos com íris claras e traços geométricos. Inicialmente apresentada como autoritária, fria e narcisista, com um senso de perfeição inatingível, ela se revela vulnerável ao ser confrontada com as imperfeições das outras Gems — e as suas próprias. Seu poder inclui controlar os corpos de outras Gems, reforçando sua dominância.'),
	(5, 'Garnet', 'Aparência: Alta, com óculos grandes, pele vinho e cabelo afro.
Personalidade: Estável, protetora, segura e muito centrada.
Curiosidades: É uma fusão permanente de Ruby e Sapphire — representa amor e união.', 'Garnet é a fusão estável de Ruby e Safira, combinando paixão e razão. Com pele escura, cabelo afro volumoso e óculos opacos, Garnet é firme, segura e protetora. É o coração do grupo das Crystal Gems, guiando com sabedoria e convicção. Sua habilidade de prever o futuro, herdada de Safira, e sua força, vinda de Ruby, tornam-na extremamente equilibrada.'),
	(6, 'Opal', 'Aparência: Alta, elegante, cabelo lilás longo, pele pálida.
Personalidade: Serena e harmoniosa, mas sua estabilidade depende da sincronia entre Amethyst e Pearl.
Curiosidades: Fusão entre Ametista e Pérola. Usa um arco como arma.', 'Opal, fusão de Pérola e Ametista, apresenta um visual etéreo: alta, elegante, com cabelo lilás e aparência suave. Opal reflete a harmonia e também a instabilidade entre suas partes. Embora poderosa e graciosa, sua fusão só se mantém estável se houver colaboração e sintonia emocional entre suas componentes. Usa um arco como arma.'),
	(7, 'Lápis Lazúli', 'Aparência: Pele azul, cabelo azul curto, asas d’água.
Personalidade: Introspectiva, melancólica, poderosa, mas emocionalmente instável.
Curiosidades: Tem poderes hidrocinéticos extremamente avançados.', 'Lápis Lazúli é uma das Gems mais poderosas do universo da série, com aparência esguia, pele e cabelos azuis, e asas feitas de água. Ela é introspectiva, sensível e marcada por traumas de aprisionamento. Apesar de seu poder imenso, especialmente no controle da água, Lápis hesita em se conectar emocionalmente, por medo de se machucar novamente. Sua jornada é sobre cura e aceitação.'),
	(8, 'Peridot', 'Aparência: Verde-limão, pequena, com visor triangular e membros robóticos (no início).
Personalidade: Lógica, sarcástica, curiosa. Evolui de antagonista para aliada.
Curiosidades: Perdeu seus aprimoramentos tecnológicos, mas aprendeu a viver “naturalmente” com ajuda das Crysta Gems.', 'Peridot é pequena, com pele verde-limão e um visor triangular. No início, depende de extensões tecnológicas (membros robóticos), mas depois passa a se adaptar ao modo de vida terrestre. É lógica, cínica e curiosa. Ao longo da série, evolui de vilã para uma aliada curiosa e divertida, aprendendo o valor da empatia e da conexão emocional.'),
	(9, 'Bismuto', 'Aparência: Musculosa, pele cinza com tons metálicos coloridos, cabelo arco-íris.
Personalidade: Apaixonada, direta, com espírito de guerreira.
Curiosidades: Uma das Crystal Gems originais. Criava armas e tinha ideais revolucionárias.', 'Bismuto possui uma aparência robusta, com pele cinza metálica e cabelo em tons vibrantes de arco-íris. É extrovertida, enérgica e tem espírito de liderança. Forjadora de armas durante a guerra das Crystal Gems, Bismuto é apaixonada por liberdade, mas seu radicalismo a afastou do grupo. Mais tarde, retorna com uma nova perspectiva.'),
	(10, 'Ametista', 'Aparência: Rosto arredondado, cabelo lilás, corpo pequeno e robusto.
Personalidade: Brincalhona, insegura, espontânea.
Curiosidades: É uma Quartz “imperfeita”, pois foi formada após o tempo ideal.', 'Ametista tem pele lilás e cabelo claro, bagunçado, refletindo sua personalidade descontraída. É espontânea, brincalhona e, às vezes, autodepreciativa. Sente-se inferior por ter sido "subdesenvolvida" em sua formação, mas sua jornada é de autoaceitação e celebração da individualidade. Gosta de lutar de forma criativa e caótica.'),
	(11, 'Rose Quartz', 'Aparência: Alta, cabelo rosa ondulado, vestido branco.
Personalidade: Carismática, idealista, misteriosa.
Curiosidades: Era na verdade Pink Diamond. Fundadora das Crystal Gems.', 'Rose Quartz, identidade adotada por Pink Diamond, tinha cabelos ondulados cor-de-rosa e uma aura maternal. Carismática e inspiradora, foi a líder da rebelião que defendeu a Terra contra a dominação das Gems. Apesar de seu legado heroico, sua história é marcada por segredos e decisões controversas. É a mãe do Steven Universo.'),
	(12, 'Padparadscha', 'Aparência: Cor de pêssego, olhos semicerrados, vestido formal.
Personalidade: Educada, doce, mas seus poderes são “defasados” — prevê o que já aconteceu.
Curiosidades: É uma Sapphire “com defeito”.', 'Padparadscha é uma Sapphire rara com pele pêssego e olhos semicerrados. É educada, gentil e sempre sorri, mesmo ao anunciar visões do passado — ao contrário das outras Sapphires, sua "visão" está sempre atrasada. Sua inocência e suavidade a tornam adorável, apesar de sua limitação funcional.'),
	(13, 'Jasper', 'Aparência: Musculosa, pele laranja com marcas vermelhas, cabelo branco selvagem.
Personalidade: Agressiva, orgulhosa, guerreira.
Curiosidades: É uma Quartz de elite e despreza Gems consideradas fracas.', 'Jasper tem corpo atlético, pele laranja com marcas vermelhas, e cabelos longos e selvagens. É uma guerreira orgulhosa, agressiva e dominante. Criada como uma Quartz de elite, Jasper despreza Gems que fogem ao padrão. Seu arco é de negação, queda e, finalmente, uma busca por redenção.'),
	(14, 'Steven Universo', 'Aparência: Humano com pele rosada, cabelo cacheado castanho, camiseta vermelha com estrela.
Personalidade: Empático, corajoso, pacificador.
Curiosidades: Filho de Rose Quartz com um humano, carrega os poderes de uma Gem.', 'Steven Universo é um híbrido de humano e Gem, com cabelo cacheado castanho, camiseta vermelha com uma estrela e uma personalidade extremamente empática. É o protagonista da série, cuja missão é conciliar mundos e curar feridas. Herda os poderes de sua mãe, Rose Quartz, e representa a esperança, a mudança e a redenção.'),
	(15, 'Sardonyx', 'Aparência: Alta, elegante, pele pêssego, terno preto e roxo, 4 braços.
Personalidade: Extrovertida, teatral, segura de si.
Curiosidades: Fusão entre Garnet e Pearl. Gosta de apresentações e discursos.', 'Sardonyx, fusão de Pearl e Garnet, é alta, de pele clara e quatro braços. Usa um traje de showwoman e é extremamente extrovertida, carismática e confiante. Gosta de apresentações teatrais e tem senso de humor sofisticado. Representa a colaboração elegante e poderosa entre lógica e paixão.'),
	(16, 'Diamante Amarelo', 'Aparência: Muito alta, pele dourada, cabelo pontudo, roupas de general.
Personalidade: Autoritária, séria, racional.
Curiosidades: Comanda exércitos, mas revela fragilidades emocionais após a guerra.', 'Diamante Amarelo tem aparência geométrica e marcial: alta, pele dourada e traços duros. É uma comandante pragmática, racional e impaciente. No entanto, após a queda do império Gem, revela camadas de vulnerabilidade e compaixão antes reprimidas.');

SELECT personalidade, palavra_chave, sintese, descricao, nome, sintese_gem, descricao_gem FROM personalidade JOIN gem ON id_personalidade = pk_personalidade WHERE id_personalidade = 2;

SELECT porcentagemExtrovertido,
	porcentagemIntuitivo,
    porcentagemThinking,
    porcentagemPercepcao,
	id_personalidade,
    personalidade,
    id_gem,
    nome 
	FROM gem JOIN personalidade ON id_personalidade = pk_personalidade
    JOIN resultado ON fk_personalidade = id_personalidade WHERE id_personalidade = 12;

SELECT COUNT(personalidade) AS qtdPersonalidade, personalidade, fk_personalidade, nome
	FROM resultado JOIN personalidade ON fk_personalidade = id_personalidade
    JOIN gem ON id_personalidade = pk_personalidade
		GROUP BY fk_personalidade, nome, personalidade ORDER BY qtdPersonalidade DESC LIMIT 8;


    SELECT porcentagemExtrovertido,
        porcentagemIntuitivo,
        porcentagemThinking,
        porcentagemPercepcao,
        id_personalidade,
        personalidade,
        id_gem,
        nome 
        FROM gem JOIN personalidade ON id_personalidade = pk_personalidade
        JOIN resultado ON fk_personalidade = id_personalidade WHERE id_personalidade = 21;
        
SELECT primeiro_nome, sobrenome FROM usuario JOIN resultado ON id = fk_usuario
	WHERE fk_personalidade = 5;
    
SELECT fk_personalidade FROM resultado WHERE fk_usuario = 16;
    


    
    
    
SET FOREIGN_KEY_CHECKS = 1;
truncate table resultado;
select * from personalidade;
select id_personalidade, personalidade, palavra_chave from personalidade;
select * from resultado;
select * from usuario;
select * from  gem;