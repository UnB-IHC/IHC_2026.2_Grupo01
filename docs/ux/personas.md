# Personas

As personas foram criadas com base no público-alvo do site **Nota Legal DF**, que é um sistema do Governo do Distrito Federal voltado para a concessão de créditos e benefícios fiscais aos cidadãos consumidores. O sistema é utilizado por pessoas de diferentes faixas etárias e níveis de familiaridade com tecnologia, o que exige uma interface acessível e de fácil compreensão.

A seguir, apresentamos as personas primárias e secundárias definidas para guiar o design e a avaliação de usabilidade e acessibilidade do sistema.

---

## Persona Primária 1: Maria das Graças

**Identidade:** Maria das Graças, 58 anos.
**Ocupação:** Professora aposentada.
**Status:** Persona primária (foco principal do design).
**Habilidades:** Ensino superior completo. Familiaridade média com tecnologia; usa o celular para redes sociais e WhatsApp, mas tem dificuldade com sistemas do governo.
**Tarefas:** Usa o Nota Legal duas vezes ao ano para consultar seus pontos e abater o valor do IPVA do seu carro.
**Relacionamentos:** Mora com o marido e costuma pedir ajuda aos filhos quando não entende algum site.
**Requisitos:** Precisa de letras grandes, botões claros e instruções passo a passo. Tem dificuldade com termos técnicos (ex: "crédito tributário").
**Expectativas:** Espera que o site seja simples, rápido e que mostre claramente quanto ela tem de saldo.

---

## Persona Primária 2: Lucas Ferreira

**Identidade:** Lucas Ferreira, 32 anos.
**Ocupação:** Analista de Sistemas.
**Status:** Persona primária.
**Habilidades:** Alta familiaridade com tecnologia. Usa o computador e o celular diariamente.
**Tarefas:** Usa o Nota Legal para consultar seus pontos e fazer a indicação de crédito para o IPTU, além de conferir se os estabelecimentos onde comprou estão cadastrados.
**Relacionamentos:** Mora sozinho e prefere resolver tudo de forma digital e autônoma.
**Requisitos:** Quer agilidade, atalhos e que o sistema não peça informações repetidas. Costuma acessar pelo celular no modo "mobile".
**Expectativas:** Espera uma interface moderna, com poucos cliques e que não trave.

---

## Persona Secundária 1: Seu Joaquim

**Identidade:** Joaquim dos Santos, 72 anos.
**Ocupação:** Comerciante aposentado.
**Status:** Persona secundária (usuário com limitações de acessibilidade).
**Habilidades:** Baixa familiaridade com tecnologia. Usa o celular apenas para ligações e tem dificuldade de enxergar letras pequenas.
**Tarefas:** Tenta usar o Nota Legal para consultar os pontos, mas frequentemente desiste e vai a um posto de atendimento presencial.
**Relacionamentos:** Pede ajuda aos netos para navegar.
**Requisitos:** Necessita de leitores de tela ou alto contraste. O site deve ser acessível por teclado.
**Expectativas:** Gostaria de um site que fosse tão simples quanto um caixa eletrônico.

---

## Resumo do Elenco de Personas

| Persona | Tipo | Perfil | Foco de Design |
| :--- | :--- | :--- | :--- |
| Maria das Graças | Primária | Usuária de meia-idade, familiaridade média | Clareza, instruções, legibilidade |
| Lucas Ferreira | Primária | Jovem adulto, alta familiaridade | Eficiência, responsividade, atalhos |
| Seu Joaquim | Secundária | Idoso, baixa familiaridade | Acessibilidade, teclado, contraste |


---

## O que a avaliação mostra para cada persona

A [inspeção](../resultado/inspecao.md) e o [teste com usuário](../resultado/resultados_avaliacao.md) atingem cada persona de um jeito diferente.

| Persona | Barreiras encontradas | Correções que mais ajudam |
| :--- | :--- | :--- |
| **Maria das Graças** | No celular, imagens pequenas e tabelas apertadas; com zoom de 200%, o menu superior perde conteúdo; o erro "data inválida" não diz como corrigir. | Mensagens de erro que orientam ("Use DD/MM/AAAA"); layout que se ajusta ao celular e ao zoom. |
| **Lucas Ferreira** | A barra superior some ao rolar; links como "página 1194" atrapalham quem quer ir direto ao ponto; as perguntas frequentes levam a outro domínio. | Barra superior fixa e links com o nome do destino. |
| **Seu Joaquim** | Os banners dizem só "Banner 1" ao leitor de tela; o foco do teclado quase não aparece; o Alto Contraste não funciona pelo teclado; o carrossel não para. | As três correções graves: imagens acessíveis, foco visível com Alto Contraste no teclado e carrossel com pausa. |

O Seu Joaquim, a persona com limitações de acessibilidade, é quem enfrenta as barreiras mais graves. Por isso o próximo passo do trabalho é testar com pessoas que usam leitor de tela ou só o teclado.
