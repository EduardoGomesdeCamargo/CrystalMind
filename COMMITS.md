## Padrão de Commits — Conventional Commits

| Tipo        | Descrição                                                                 | Exemplo                                                   |
|-------------|---------------------------------------------------------------------------|-----------------------------------------------------------|
| feat      | Adição de nova funcionalidade ao projeto                                  | feat(mapa): adicionar botão de localização atual        |
| fix       | Correção de bugs ou falhas no sistema                                     | fix(login): corrigir erro ao autenticar com senha errada|
| docs      | Alterações apenas na documentação                                          | docs(readme): atualizar instruções de instalação        |
| style     | Ajustes de estilo, formatação, indentação — sem alteração de código real  | style(home): remover espaços desnecessários             |
| refactor  | Refatoração de código, sem mudar comportamento nem corrigir bug           | refactor(api): melhorar legibilidade da função getData  |
| perf      | Melhorias de performance                                                  | perf(lista): otimizar loop de renderização              |
| test      | Adição ou modificação de testes                                           | test(button): criar teste unitário para clique          |
| chore     | Tarefas diversas que não afetam o código-fonte nem testes                 | chore(deps): atualizar pacotes do projeto               |
| build     | Alterações que afetam o processo de build ou dependências externas        | build: configurar Webpack para produção                 |
| ci        | Configuração ou modificação de integração contínua                        | ci: adicionar script de build no GitHub Actions         |
| revert    | Reversão de um commit anterior                                            | revert: feat(auth): adicionar login social              |

### Dica:
Use no formato: