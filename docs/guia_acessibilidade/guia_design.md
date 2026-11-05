# Checklist de Design

- [ ] **Garantir um indicador de foco visível** (contorno ou destaque) em todos os elementos interativos ao navegar com a tecla Tab.   `WCAG 2.4.7 (AA)` [(49)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)
- [ ] **Oferecer mensagens de erro descritivas**, indicando claramente qual campo está errado e como corrigir, usando mais de um recurso (cor + texto).   `WCAG 3.3.1 (A) ITRAC` [(50)](https://www.w3.org/WAI/WCAG22/Understanding/error-identification)
- [ ] **Sugerir correções** sempre que um erro de preenchimento for detectado em formulários (Ex: "Formato de data inválido. Use DD/MM/AAAA").   `WCAG 3.3.3 (AA)` [(51)](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion)
- [ ] **Garantir contraste adequado de texto (mínimo 4.5:1)**, evitando texto claro em fundo claro ou escuro em fundo escuro.   `WCAG 1.4.3 (AA) ITRAC` [(52)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)
- [ ] **Garantir contraste de componentes** (botões, campos, links e bordas), com um mínimo de 3:1.   `WCAG 1.4.11 (AA)` [(53)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)
- [ ] **Assegurar contraste adequado em objetos gráficos** (ícones, elementos informativos e gráficos), com um mínimo de 3:1.   `WCAG 1.4.11 (AA) ITRAC` [(54)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)
- [ ] **Evitar depender apenas de cores** para transmitir informações ou instruções (Ex: erro não ser sinalizado só por vermelho).   `WCAG 1.4.1 (A) ITRAC` [(55)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color)
- [ ] **Garantir que links sejam distinguíveis visualmente**, usando mais que apenas a cor para destacá-los.   `WCAG 1.4.1 (A)` [(56)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color)
- [ ] **Disponibilizar opções de ajuda**, incluindo contato humano (email, telefone) e, se possível, ferramentas automatizadas (chatbots, FAQ).   `WCAG 3.2.6 (A) ITRAC` [(57)](#)
- [ ] **Garantir design responsivo**, permitindo que o conteúdo se reorganize em uma única coluna em telas pequenas (sem rolagem horizontal).   `WCAG 1.4.10 (AA)` [(58)](https://www.w3.org/WAI/WCAG22/Understanding/reflow)
- [ ] **Permitir redimensionamento do texto em até 200%** através do zoom do navegador, sem perda de conteúdo ou quebra de layout.   `WCAG 1.4.4 (AA)` [(59)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [ ] **Manter espaçamento adequado do texto**
  * Linha ≥ 1.5x;
  * Parágrafo ≥ 2x;
  * Entre letras ≥ 0.12em;
  * Entre palavras ≥ 0.16em.   `WCAG 1.4.12 (AA)` [(60)](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing)
- [ ] **Garantir consistência de navegação**, fazendo com que as ações e menus importantes (como o menu principal) funcionem da mesma forma em todas as páginas.   `WCAG 3.2.3 (AA) ITRAC` [(61)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation)
- [ ] **Garantir consistência de elementos de ajuda** (ícones, links, botões) ao longo de todas as páginas públicas do site.   `WCAG 3.2.6 (A) ITRAC` [(62)](#)
- [ ] **Garantir tamanho mínimo de área clicável (44x44px)** para botões e links.   `WCAG 2.5.8 (AA)` [(63)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)
- [ ] **Informar ao usuário sua localização atual na interface** (Ex: "Você está aqui", "Passo 2 de 5").   _(Heurística 1)_ [(64)](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [ ] **Exibir opções, ações e instruções visíveis** na tela, evitando exigir memória do usuário entre telas.   _(Heurística 6)_ [(65)](https://www.nngroup.com/articles/recognition-and-recall/)
- [ ] **Manter design estético e minimalista**, contendo apenas informações relevantes e necessárias para a tarefa atual.   _(Heurística 8)_ [(66)](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [ ] **Evitar esconder conteúdo de tecnologias assistivas** com `display:none` ou `visibility:hidden` (em CSS) em elementos que deveriam ser lidos.   _(Guia-UK)_ [(67)](#)

### Tipografia e Legibilidade
- [ ] **Utilizar tamanhos de fonte que favoreçam a legibilidade**, evitando textos excessivamente pequenos e permitindo ampliação sem perda de conteúdo ou funcionalidade. `WCAG 1.4.4 (AA)` [(121)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)

### Alinhamento e Organização do Texto
- [ ] **Priorizar o alinhamento à esquerda em blocos de texto**, evitando a justificação que pode gerar espaçamentos irregulares entre palavras e dificultar a leitura para algumas pessoas. `Boa prática de usabilidade e legibilidade`.

### Animações e Movimento
- [ ] **Respeitar a preferência do usuário por movimento reduzido**, permitindo desativar ou reduzir animações e transições não essenciais, considerando a configuração `prefers-reduced-motion` do sistema operacional. `WCAG 2.3.3 (AAA)` [(122)](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions)

### Personalização Visual
- [ ] **Disponibilizar opções de personalização visual**, como modo escuro ou alto contraste, quando aplicável, garantindo que todas as combinações de cores mantenham os requisitos de contraste e legibilidade. `Boa prática de acessibilidade e usabilidade`.

### Movimento e Conteúdo Dinâmico
- [ ] **Disponibilizar controles para pausar, parar ou ocultar animações e conteúdos em movimento exibidos automaticamente por mais de cinco segundos**, quando apresentados em paralelo a outros conteúdos, permitindo que o usuário controle a experiência visual. `WCAG 2.2.2 (A)` [(123)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)

### Orientação e Características Sensoriais
- [ ] **Não restringir o conteúdo a uma única orientação de exibição** (retrato ou paisagem), salvo quando a orientação for essencial.   `Grupo 08 / NBR 5.10.3 / WCAG 1.3.4 (AA)` [(117)](https://www.w3.org/WAI/WCAG22/Understanding/orientation)
- [ ] **Não transmitir instruções que dependam apenas de características sensoriais** (forma, cor, tamanho, localização visual, orientação ou som).   `NBR 5.10.1 / WCAG 1.3.3 (A)` [(118)](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics)
- [ ] **Garantir contraste mínimo de 3:1 do indicador de foco** em relação ao fundo e entre os estados com e sem foco.   `NBR 5.11.6 / WCAG 1.4.11 (AA)` [(119)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)
- [ ] **Se forem oferecidos botões de alto contraste e de tamanho de fonte**, implementá-los com qualidade (área de clique e espaçamento adequados), lembrando que não são obrigatórios, pois muitas pessoas já usam recursos nativos do navegador/sistema.   `Grupo 08 – Guia BP (seção 3, p.28)` [(120)](#)
