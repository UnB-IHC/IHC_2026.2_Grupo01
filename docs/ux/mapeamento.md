## 1. Introdução
Este documento apresenta o Mapeamento de Experiências (Experience Mapping) do portal **Nota Legal DF**, desenvolvido para a disciplina de Interação Humano-Computador (IHC). O objetivo é registrar as ações, sentimentos, pontos de dor e oportunidades de melhoria ao longo da jornada do cidadão no sistema.

---

## 2. Matriz do Mapeamento de Experiências

| Etapa da Jornada | Ações do Usuário | Pensamentos & Dores | Sentimento / Emocional | Oportunidades de Melhoria (UX & Acessibilidade) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Descoberta & Acesso** | Navega na página inicial buscando informações sobre o programa e sorteios. | *"Onde clico para consultar meus créditos ou me cadastrar?"* | Confuso | Melhorar a hierarquia visual dos botões principais e estruturar cabeçalhos para leitores de tela. |
| **2. Autenticação (Login/Cadastro)** | Tenta realizar o acesso com CPF e senha ou criar a conta inicial. | *"O processo de validação de identidade tem etapas demais."* | Ansioso | Simplificar a recuperação de senha e integrar com o fluxo de autenticação Gov.br. |
| **3. Consulta de Créditos & Extrato** | Acessa a área logada para verificar saldo e notas lançadas. | *"Tabelas difíceis de visualizar em telas menores e filtros pouco claros."* | Insatisfeito | Garantir responsividade completa da tabela e contraste adequado conforme WCAG 2.2 / NBR 17225. |
| **4. Indicação de Benefício / Sorteios** | Realiza a indicação do saldo acumulado para abatimento no IPTU/IPVA. | *"Não há uma confirmação visual clara de que a operação foi concluída."* | Inseguro | Implementar mensagens claras de feedback do sistema e geração simples de comprovante em PDF. |

---

## 3. Principais Achados de IHC e Acessibilidade
* **Usabilidade e Carga Cognitiva:** Gargalos na navegação primária afetam usuários com baixo letramento digital durante os períodos de indicação de créditos.
* **Acessibilidade Digital (NBR 17225 / WCAG 2.2):**
  * **Contraste de Cores:** Elementos do menu e botões secundários exigem ajuste nas razões de contraste para atender à especificação AA/AAA.
  * **Leitores de Tela:** Ausência de marcas estruturais (`ARIA landmarks`) adequadas nos formulários de busca e tabelas de extrato.

---

## 4. Histórico de Versões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :--- | :--- |
| 07/11/2026 | 1.0 | Criação do Mapeamento de Experiências do Nota Legal DF | Grupo 01 |
