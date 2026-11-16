# Recomendações e conclusão

O Nota Legal é claro e fácil de usar, mas ainda tem barreiras para quem depende de leitor de tela ou de teclado. Esta página junta a [inspeção](inspecao.md) e o [teste com usuário](resultados_avaliacao.md) em uma lista única de correções e nas conclusões do trabalho.

<div class="destaques" markdown>
<div markdown>

7 de 9

critérios de conteúdo conformes

</div>
<div markdown>

4

falhas de nível A da WCAG, que impedem a conformidade com a LBI e a NBR 17225

</div>
<div markdown>

97,5

no SUS, com 5 de 5 tarefas concluídas sem ajuda

</div>
</div>

---

## Inspeção e teste veem problemas diferentes

<div class="colunas" markdown>
<div markdown>

**Só a inspeção encontrou**

- Alt “Banner 1” e texto dentro das imagens
- Foco do teclado quase invisível
- Alto Contraste fora do teclado
- Carrossel sem pausa
- Links “página 1194”
- Erro sem o formato da data

</div>
<div class="realce" markdown>

**Os dois apontam: saber onde se está**

- Inspeção: o breadcrumb não marca a página atual (H1)
- Teste: a barra superior some ao rolar, e a participante se perde

</div>
<div markdown>

**Só o teste encontrou**

- O botão de cadastro passou despercebido
- As perguntas frequentes abrem outro domínio, com outro visual

</div>
</div>

As barreiras da inspeção pesam sobretudo para quem usa leitor de tela ou só o teclado. Por isso o próximo passo é **testar com essas pessoas**.

---

## Cinco correções, em ordem de prioridade

| # | Correção | Como fazer | Referência |
| :---: | :--- | :--- | :--- |
| 1 | **Imagens acessíveis** | Alt com a mensagem do banner e texto real em HTML, fora da imagem | WCAG 1.1.1 e 1.4.5 · sev. 3 |
| 2 | **Foco visível e Alto Contraste no teclado** | Contorno de 3 px com contraste mínimo de 3:1 e botão nativo | WCAG 2.4.7 e 2.1.1 · sev. 3 |
| 3 | **Carrossel com pausa** | Botão Pausar e Retomar, com aria-live quando a rotação para | WCAG 2.2.2 e 4.1.3 · sev. 3 |
| 4 | **Links e erros que orientam** | “Regulamento do sorteio” no lugar de “página 1194”; “Use DD/MM/AAAA” no lugar de “data inválida” | WCAG 2.4.4 e 3.3.3 · sev. 3 e 2 |
| 5 | **Navegação que mostra onde se está** | Barra superior fixa, página atual no breadcrumb e botão de cadastro em destaque | H1 e teste com usuário |

As três primeiras resolvem as falhas graves com **poucas linhas de HTML e CSS**. O código sugerido para cada uma está na página da [inspeção](inspecao.md#os-tres-problemas-graves).

---

## Conclusão

- **O que funciona:** linguagem simples, visual limpo e conteúdo bem organizado. Para a participante do teste, o site foi fácil: SUS de 97,5 e todas as tarefas concluídas sem ajuda.
- **O que falta:** quatro falhas de nível A da WCAG (1.1.1, 2.1.1, 2.2.2 e 2.4.4) deixam de fora quem depende de leitor de tela ou de teclado. Enquanto existirem, o portal não cumpre o art. 63 da Lei Brasileira de Inclusão nem a ABNT NBR 17225.
- **O que aprendemos:** inspeção e teste se completam. Um método enxerga o que o outro deixa passar, e os dois juntos mostram que o maior problema de navegação do site é não deixar claro onde a pessoa está.

!!! note "Limites"
    O teste teve **uma única participante**, então os números do teste são indicativos, e o SUS não é porcentagem. A inspeção foi feita pela equipe, sem pessoas com deficiência.
