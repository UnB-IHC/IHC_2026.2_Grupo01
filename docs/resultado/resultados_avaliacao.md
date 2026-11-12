# Resultados da Avaliação com Usuário

Esta página consolida os resultados obtidos na sessão de **teste de usabilidade moderado com técnica Think-Aloud** do site **Programa Nota Legal do Distrito Federal** (notalegal.df.gov.br), conduzida de acordo com o [Roteiro de Avaliação](roteiro.md). A análise relaciona as observações coletadas durante a sessão às heurísticas de Nielsen documentadas em [ux.md](../ux/ux.md) e ao questionário SUS (*System Usability Scale*).

---

## Dados da Sessão

| Item | Detalhe |
| :--- | :--- |
| **Data** | 11/11/2026 |
| **Site avaliado** | Programa Nota Legal do Distrito Federal |
| **Aplicador** | Pietro Ritchele de Oliveira Rodrigues |
| **Participante** | Participante 1 |
| **Metodologia** | Teste de Usabilidade Moderado — Think-Aloud Protocol |
| **Registro** | Gravação de tela e áudio, conforme autorizado |

---

## Síntese Geral

!!! note "Visão geral da sessão"
    O teste de usabilidade do site Nota Legal revelou um produto **eficiente e de fácil uso**: a participante concluiu as **5 tarefas sem ajuda**, em **1min58s no total**, e atribuiu ao site um **SUS de 97,5** (nota máxima de 100). As dificuldades observadas foram **pontuais e de baixa gravidade**: a **barra superior que desaparece ao rolar a página**, o **botão de cadastro pouco notado à primeira vista** e a **saída para domínios externos** com estilos diferentes do site principal.

---

## Fortalezas Identificadas

!!! success "O que o site faz bem"

    ### ✅ Acesso rápido às informações sobre sorteios, benefícios e atendimento
    Nas tarefas 3, 4 e 5, a participante foi direto ao caminho esperado: clicou corretamente em **Sorteios**, em **Benefícios** e rolou até o **rodapé** para encontrar o atendimento, sem errar e com tempos de **0:18**, **0:10** e **0:08**. Isso demonstra que a **arquitetura da informação** e os rótulos do menu correspondem às expectativas do usuário.

    ### ✅ Informações atualizadas e bem documentadas
    Os editais publicados são os mais recentes e o site os documenta de forma coerente. Isso atende à **Heurística 2 — Correspondência com o mundo real** e à **Heurística 10 — Ajuda e documentação** documentadas em [ux.md](../ux/ux.md).

    ### ✅ Design minimalista e padronizado
    Os botões são indicados em **verde** e o texto aparece sobre **fundo branco**, o que facilita o reconhecimento dos elementos interativos e mantém o design limpo e direto.

    ### ✅ Liberdade de navegação
    Não foram encontrados bloqueios para obter informações no site, o que atende à **Heurística 3 — Controle e liberdade do usuário**.

---

## Fraquezas Identificadas

!!! danger "Problemas de usabilidade observados"

    As fraquezas estão organizadas por tarefa do roteiro. Nenhuma delas impediu a conclusão das tarefas, mas todas geraram desvios, erros ou perda de tempo.

---

## Resultados por Tarefa

### Tarefa 1 — Descobrir como usar os créditos

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ✅ Sucesso sem ajuda *(com 1 desvio)* |
| **Tempo gasto / referência** | 0:47 / 1:00 |
| **Nº de erros** | 1 |
| **Heurística relacionada** | H4 — Consistência e padrões |

!!! abstract "Evidências da sessão"
    A participante procurou a informação sobre os impostos em **"Perguntas frequentes"** e, nesse caminho, **saiu do site original**. Mesmo assim, encontrou a informação requerida (abatimento de IPTU e IPVA) e concluiu a tarefa abaixo do tempo de referência.

    Fala registrada durante o Think-Aloud:

    > *"É em 'perguntas frequentes'?"*

**Análise:**

- **Heurística 4 — Consistência e padrões** ([ux.md](../ux/ux.md)): o site é padronizado, mas **leva a domínios externos com estilos diferentes**, o que pode desorientar o usuário, que não percebe que saiu do site principal.
- O caminho esperado era *Página inicial → Benefícios → abatimento de impostos*. A escolha por "Perguntas frequentes" indica que a informação sobre os impostos poderia ser **mais evidente na página inicial**.

---

### Tarefa 2 — Iniciar o cadastro

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ✅ Sucesso sem ajuda *(com 1 desvio)* |
| **Tempo gasto / referência** | 0:35 / 0:05 |
| **Nº de erros** | 1 |
| **Heurística relacionada** | H6 — Reconhecimento em vez de memorização |

!!! abstract "Evidências da sessão"
    A participante **não encontrou o botão grande de cadastro à primeira vista**, o que gerou um erro e um tempo muito acima do tempo de referência (7 vezes maior). Essa foi a tarefa com maior diferença em relação ao desempenho de quem conhece o site.

    Fala registrada:

    > *"É em 'sorteios'?"*

**Análise:**

- **Heurística 6 — Reconhecimento em vez de memorização** ([ux.md](../ux/ux.md)): apesar de o botão "Quero me cadastrar!" ser grande e verde, ele **não foi percebido de imediato** por um usuário de primeira visita, o que indica que sua **posição ou destaque na página inicial** pode ser melhorado.

---

### Tarefa 3 — Saber sobre o próximo sorteio

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ✅ Sucesso sem ajuda |
| **Tempo gasto / referência** | 0:18 / 0:15 |
| **Nº de erros** | 0 |
| **Heurísticas violadas** | Nenhuma |

!!! abstract "Evidências da sessão"
    A participante **clicou corretamente em "Sorteios"** e localizou a data e o valor do próximo sorteio, com tempo muito próximo ao de referência.

    Fala registrada:

    > *"É em 'sorteios'."*

---

### Tarefa 4 — Receber créditos em dinheiro

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ✅ Sucesso sem ajuda |
| **Tempo gasto / referência** | 0:10 / 4:30 |
| **Nº de erros** | 0 |
| **Heurísticas violadas** | Nenhuma |

!!! abstract "Evidências da sessão"
    A participante **clicou corretamente em "Benefícios"** e encontrou o saldo mínimo e o período de indicação da conta. Não falou nada durante a tarefa, o que indica que o caminho foi **direto e sem dúvidas**.

---

### Tarefa 5 — Pedir ajuda

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ✅ Sucesso sem ajuda |
| **Tempo gasto / referência** | 0:08 / 0:50 |
| **Nº de erros** | 0 |
| **Heurísticas violadas** | Nenhuma |

!!! abstract "Evidências da sessão"
    A participante **rolou a página até o fundo** e encontrou os canais de atendimento no rodapé. Também não falou nada durante a tarefa.

---

### Observação Transversal — Barra superior que some ao rolar

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ⚠️ Parcial |
| **Heurística violada** | H5 — Prevenção de erros |

!!! abstract "Evidências da sessão"
    Durante a navegação, a **barra superior desaparece ao rolar a página para baixo**, e isso fez com que a participante **se perdesse** ao tentar voltar a outras áreas do site.

**Análise:**

- **Heurística 5 — Prevenção de erros** ([ux.md](../ux/ux.md)): sem a barra de navegação visível, o usuário precisa rolar de volta ao topo para trocar de área, o que aumenta a chance de erro e de desorientação. Em páginas longas, manter a barra **fixa** ou oferecer um botão de "voltar ao topo" reduz esse problema.

---

## Quadro Consolidado

| Tarefa | Resultado | Tempo gasto | Tempo de referência | Fortaleza | Fraqueza Principal |
| :--- | :---: | :---: | :---: | :--- | :--- |
| 1 — Usar os créditos | ✅ Sucesso (1 desvio) | 0:47 | 1:00 | Informação encontrada abaixo do tempo de referência | Saída para site externo com estilo diferente |
| 2 — Iniciar o cadastro | ✅ Sucesso (1 desvio) | 0:35 | 0:05 | Botão grande e verde | Botão de cadastro não percebido à primeira vista |
| 3 — Próximo sorteio | ✅ Sucesso | 0:18 | 0:15 | Menu "Sorteios" claro | — |
| 4 — Receber em dinheiro | ✅ Sucesso | 0:10 | 4:30 | Menu "Benefícios" claro | — |
| 5 — Pedir ajuda | ✅ Sucesso | 0:08 | 0:50 | Atendimento no rodapé | — |
| Transversal — Navegação | ⚠️ Parcial | — | — | — | Barra superior some ao rolar |

---

## Avaliação por Heurística de Nielsen

Conforme o roteiro de avaliação, as heurísticas de Nielsen foram aplicadas à experiência observada na sessão:

| Heurística | Status | Evidências encontradas |
| :--- | :---: | :--- |
| H1 — Status visível | — | Como o site é estático, não há "status" para analisar |
| H2 — Correspondência com o mundo real | ✅ OK | Os editais publicados são os mais recentes |
| H3 — Controle e liberdade | ✅ OK | Não há bloqueios ao obter informações no site |
| H4 — Padronização | ⚠️ Parcial | Site padronizado, mas leva a domínios externos com estilos diferentes |
| H5 — Prevenção de erros | ⚠️ Parcial | A barra superior some ao rolar para baixo, e isso fez a participante se perder |
| H6 — Reconhecimento em vez de memorização | ✅ OK | Botões indicados em verde e texto sobre fundo branco *(ressalva: botão de cadastro não percebido na tarefa 2)* |
| H7 — Flexibilidade e eficiência | ✅ OK | O site é eficiente em prover as informações requeridas |
| H8 — Design estético e minimalista | ✅ OK | Design bastante minimalista, embora o ícone pudesse ser melhor |
| H9 — Ajuda na recuperação de erros | — | Não houve ajuda desse tipo, mas os erros não foram graves |
| H10 — Documentação e ajuda | ✅ OK | O site documenta bem os seus editais e apresenta a informação de forma coerente |

---

## Resultado do SUS

!!! info "Sobre esta seção"
    O questionário *System Usability Scale* (SUS) foi aplicado logo após a última tarefa, conforme previsto no [Roteiro de Avaliação](roteiro.md). A participante marcou de **1 (discordo totalmente)** a **5 (concordo totalmente)** em cada afirmação.

| Nº | Afirmação | Resposta | Contribuição |
| :---: | :--- | :---: | :---: |
| 1 | Eu acho que gostaria de usar esse sistema com frequência. | 4 | 3 |
| 2 | Eu achei o sistema desnecessariamente complexo. | 1 | 4 |
| 3 | Eu achei o sistema fácil de usar. | 5 | 4 |
| 4 | Eu acho que precisaria de ajuda de uma pessoa com conhecimentos técnicos para usar o sistema. | 1 | 4 |
| 5 | Eu acho que as várias funções do sistema estão muito bem integradas. | 5 | 4 |
| 6 | Eu acho que o sistema apresenta muita inconsistência. | 1 | 4 |
| 7 | Eu imagino que as pessoas aprenderão como usar esse sistema rapidamente. | 5 | 4 |
| 8 | Eu achei o sistema atrapalhado de usar. | 1 | 4 |
| 9 | Eu me senti confiante ao usar o sistema. | 5 | 4 |
| 10 | Eu precisaria aprender várias coisas novas antes de conseguir usar o sistema. | 1 | 4 |

**Cálculo:** itens ímpares (resposta − 1) e itens pares (5 − resposta):

`3 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 = 39` → `39 × 2,5 = 97,5`

!!! success "Pontuação SUS: 97,5 / 100"
    Pontuação **muito acima da média de referência (68)**, na faixa de **usabilidade excelente**. Isso confirma a percepção geral da sessão: o site é fácil de usar e a participante se sentiu confiante ao navegar.

---

## Plano de Ação

!!! success "Ações corretivas definidas pela equipe"
    Com base nas evidências coletadas, a equipe priorizou as seguintes melhorias:

| Prioridade | Ação | Referência |
| :---: | :--- | :--- |
| 🟡 Média | **Manter a barra superior fixa** ao rolar a página (ou oferecer botão "voltar ao topo") | H5 — Prevenção de erros |
| 🟡 Média | **Dar mais destaque ao botão de cadastro** ("Quero me cadastrar!") na página inicial | H6 — Reconhecimento em vez de memorização |
| 🟡 Média | **Sinalizar links que levam a domínios externos** (aviso ou ícone) e aproximar o estilo dessas páginas do site principal | H4 — Padronização |
| 🟢 Baixa | **Tornar a informação sobre os impostos que aceitam abatimento (IPTU e IPVA) mais evidente** na página inicial e em "Perguntas frequentes" | H6 / H10 |
| 🟢 Baixa | **Revisar o ícone do site** | H8 — Design estético e minimalista |

---

## Resultados da Entrevista Pós-Teste

!!! info "Sobre esta seção"
    Esta seção apresenta os resultados da entrevista semiestruturada conduzida ao final da sessão, conforme previsto no [Roteiro de Avaliação](roteiro.md). As respostas da participante às seis perguntas da entrevista final **não constam nos registros desta sessão** e devem ser incluídas aqui, no mesmo formato utilizado nas demais avaliações (citação da participante e notas de 1 a 5 por dimensão).

| Pergunta | Resposta da participante |
| :--- | :--- |
| 1. Como foi sua experiência geral ao usar o site? | *(preencher)* |
| 2. Quais foram as principais dificuldades que você encontrou? | *(preencher)* |
| 3. Em que momento você se sentiu perdido ou em dúvida? O que aconteceu? | *(preencher)* |
| 4. Alguma informação ou termo do site gerou confusão? | *(preencher)* |
| 5. O que você mudaria primeiro para melhorar o site? | *(preencher)* |
| 6. Que outras melhorias você sugere? | *(preencher)* |

---

## Registro da Sessão

!!! info "Registro Think-Aloud"
    Resumo das ações e falas registradas durante a sessão de teste.

| Tempo | Ação realizada | O que a participante falou | Observação do moderador |
| :---: | :--- | :--- | :--- |
| 0:47 | Descobrir quais impostos aceitam desconto com os créditos | *"É em 'perguntas frequentes'?"* | Saiu do site original, mas ainda encontrou a informação requerida |
| 0:35 | Criar cadastro | *"É em 'sorteios'?"* | Não encontrou o botão grande de cadastro à primeira vista |
| 0:18 | Descobrir quando é o próximo sorteio | *"É em 'sorteios'."* | Clicou corretamente em "Sorteios" |
| 0:10 | Descobrir o saldo mínimo para receber os créditos em depósito | *(nada)* | Clicou corretamente em "Benefícios" |
| 0:08 | Descobrir como falar com o atendimento | *(nada)* | Rolou corretamente até o fundo da página |

**Consentimento:** A participante assinou o Termo de Consentimento Livre e Esclarecido (TCLE) antes do início da sessão. Sua identidade é mantida em sigilo neste documento.
