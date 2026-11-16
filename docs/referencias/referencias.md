# Ferramentas

Esta página reúne ferramentas que ajudam a equipe a **colocar em prática e verificar**
os itens do Guia de Acessibilidade. Para cada uma, indicamos quais partes do checklist
ela apoia, de modo que a escolha da ferramenta parta sempre da tarefa que se quer
cumprir.

## [WAVE — WebAIM Web Accessibility Evaluation Tool](https://wave.webaim.org/)

Ferramenta gratuita que avalia automaticamente uma página web e mostra, sobre a
própria interface, erros, alertas, falhas de contraste e problemas de estrutura
semântica.

Apoia o checklist de **Design** na verificação de contraste adequado de texto, de
componentes e de objetos gráficos, e no uso de informação que não dependa apenas da
cor. Apoia o checklist de **Conteúdo** na conferência de textos alternativos em
imagens e na hierarquia de títulos. Apoia o checklist de **Desenvolvimento** na
identificação de regiões, listas, links e rótulos de formulário.


## [ANDI — Accessible Name & Description Inspector](https://www.ssa.gov/accessibility/andi/help/install.html)

Ferramenta gratuita, usada direto no navegador, que mostra como as tecnologias assistivas leem cada elemento: o nome acessível, a descrição, a ordem de tabulação e quais elementos recebem foco.

Apoia o checklist de **Desenvolvimento** na verificação da navegação por teclado, da ordem de foco e dos nomes de botões, links e campos. Apoia o checklist de **Conteúdo** ao mostrar o texto alternativo que chega ao leitor de tela.

## [axe-core — biblioteca de testes automatizados de acessibilidade](https://github.com/dequelabs/axe-core)

Framework de auditoria automatizada amplamente usado na indústria. Detecta problemas
relacionados às diretrizes de acessibilidade e pode ser integrado ao navegador, a
testes automatizados ou a pipelines de CI/CD.

Apoia o checklist de **Gestão de Projetos** ao viabilizar o monitoramento contínuo com
ferramentas e checklists durante todo o ciclo do projeto e a execução de testes a cada
sprint. Apoia o checklist de **Desenvolvimento** na checagem de foco e navegação,
formulários, botões e controles, idioma da página e uso correto de regiões.

## [Lighthouse — auditoria de acessibilidade no navegador](https://developer.chrome.com/docs/lighthouse/accessibility/)

Auditoria integrada às ferramentas de desenvolvedor do Chrome que gera um relatório de
acessibilidade com pontuação e recomendações de correção.

Apoia o checklist de **Gestão de Projetos** ao permitir validações recorrentes e
critérios de aceite objetivos por entrega. Apoia o checklist de **Desenvolvimento** ao
sinalizar problemas de idioma, rótulos, contraste e estrutura semântica diretamente no
ambiente de desenvolvimento.

## [WebAIM Contrast Checker — verificador de contraste](https://webaim.org/resources/contrastchecker/)

Ferramenta que calcula a razão de contraste entre duas cores e indica se ela atende
aos níveis exigidos para texto e para componentes.

Apoia diretamente o checklist de **Design** nos itens de contraste adequado de texto
(mínimo de 4,5:1), de contraste de componentes e bordas (mínimo de 3:1) e de contraste
em objetos gráficos, além de reforçar que a informação não seja transmitida apenas por
cor.

## [Colour Contrast Analyser (TPGi)](https://www.tpgi.com/color-contrast-checker/)

Aplicativo de desktop que mede o contraste de cores capturando qualquer ponto da tela,
útil quando as cores não estão acessíveis em um arquivo de estilo.

Apoia o checklist de **Design** nos mesmos itens de contraste de texto, de componentes
e de objetos gráficos, e o checklist de **Conteúdo** ao validar a legibilidade de
textos sobre imagens e fundos variados.

## Leitores de tela (NVDA, VoiceOver e Orca)

Tecnologias assistivas que leem a interface em voz alta e permitem navegar sem o mouse.
Testar com um leitor de tela é a forma mais direta de validar a experiência de quem
depende dele. O [NVDA](https://www.nvaccess.org/) é gratuito para Windows, o VoiceOver
acompanha os sistemas da Apple e o Orca está disponível em distribuições Linux.

Apoiam o checklist de **Desenvolvimento** na verificação de foco, navegação e teclado,
leitura de tabelas e formulários, anúncio de mudanças automáticas na página e ordem
lógica de leitura das regiões. Apoiam o checklist de **Conteúdo** ao confirmar que
textos alternativos, títulos e rótulos fazem sentido quando lidos em sequência.

---

## Como usamos as ferramentas no Nota Legal

Na [inspeção do Nota Legal](../resultado/inspecao.md), combinamos três ferramentas automáticas com testes manuais.

| Ferramenta | O que mostrou no Nota Legal |
| :--- | :--- |
| **WAVE** | Pontuação AIM de 7,9 em 10: 1 erro (atualização automática da página), 0 erros de contraste e 2 alertas. |
| **ANDI** | 36 elementos alcançáveis pelo Tab, sem o botão de Alto Contraste entre eles. |
| **axe DevTools** (axe-core 4.10.3) | 8 problemas moderados e nenhum crítico: página sem h1, salto para h4, dois landmarks main e menus sem nome próprio. |
| **Testes manuais** | Navegação com Tab e Shift+Tab, zoom de 200% e uso no celular. Foi assim que apareceram o foco quase invisível, o carrossel sem pausa e o menu cortado no zoom. |

As ferramentas automáticas não detectaram os problemas mais graves (texto alternativo genérico, foco quase invisível e carrossel sem pausa). Eles só apareceram na inspeção manual, por isso recomendamos sempre combinar os dois.
