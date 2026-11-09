# UX e Heurísticas de Nielsen

## O que é UX

**UX (User Experience)** é a experiência completa de uma pessoa ao usar um produto: o que ela sente, o quanto consegue atingir seu objetivo e o quanto o uso é agradável.

- **UI**: a aparência da interface (botões, cores, layout).
- **Usabilidade**: o quão fácil, rápido e sem erros é usar o sistema.
- **UX**: engloba tudo isso e também emoção, utilidade e contexto de uso.

## Usabilidade

Segundo a ISO 9241-11, é medida por:

- **Eficácia**: a pessoa consegue completar a tarefa?
- **Eficiência**: com quanto esforço e tempo?
- **Satisfação**: ela fica satisfeita com o uso?

## Avaliação heurística

Método de **inspeção**: especialistas analisam a interface com base em princípios de usabilidade (as heurísticas), sem envolver usuários. É rápido e barato, e pode ser feito cedo no projeto.

## As 10 Heurísticas de Nielsen

| # | Heurística | Ideia | Exemplo |
|---|---|---|---|
| 1 | Visibilidade do status do sistema | Informar o que está acontecendo | Barra de progresso no upload |
| 2 | Correspondência com o mundo real | Usar a linguagem do usuário | Ícone de lixeira para excluir |
| 3 | Controle e liberdade do usuário | Permitir desfazer e cancelar | Botão "Desfazer" ao apagar um e-mail |
| 4 | Consistência e padrões | Mesma ação, mesmo nome e aparência | Botão primário igual em todas as telas |
| 5 | Prevenção de erros | Evitar que o erro aconteça | Confirmar antes de excluir a conta |
| 6 | Reconhecimento em vez de memorização | Deixar opções visíveis | Histórico de buscas recentes |
| 7 | Flexibilidade e eficiência de uso | Atalhos para quem tem experiência | `Ctrl+C` / `Ctrl+V` |
| 8 | Design estético e minimalista | Mostrar só o que importa | Tela limpa, foco na ação principal |
| 9 | Ajudar a corrigir erros | Mensagens claras com solução | "Senha curta. Use 8 ou mais caracteres." |
| 10 | Ajuda e documentação | Ajuda fácil de achar e objetiva | Central de ajuda com busca |

## Como fazer uma avaliação heurística

1. Escolha as telas e tarefas a avaliar.
2. De 3 a 5 avaliadores analisam a interface **separadamente**.
3. Cada problema é registrado com a heurística violada e uma nota de severidade.
4. Os resultados são reunidos em uma lista única.
5. A equipe prioriza e corrige.

## Severidade

| Nota | Nível |
|---|---|
| 0 | Não é um problema |
| 1 | Cosmético |
| 2 | Pequeno |
| 3 | Grave |
| 4 | Catastrófico |

## Exemplo de registro

| Tela | Problema | Heurística | Severidade | Sugestão |
|---|---|---|---|---|
| Login | Erro "Falha 403" sem explicação | H9 | 3 | Mostrar mensagem clara |
| Cadastro | Campo de telefone aceita letras | H5 | 2 | Validar o campo |

## Acessibilidade (WCAG e NBR)

Heurísticas avaliam usabilidade para todos. A acessibilidade garante que pessoas com deficiência também consigam usar.

- **WCAG** (W3C): diretrizes baseadas em 4 princípios: Perceptível, Operável, Compreensível e Robusto. Níveis A, AA e AAA.
- **NBR 17225**: norma brasileira de acessibilidade web, alinhada ao WCAG.
