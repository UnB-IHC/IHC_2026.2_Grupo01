# Guia de Acessibilidade Digital

O Guia de Acessibilidade Digital é um material criado para orientar a **construção de interfaces inclusivas**, de modo que todas as pessoas, independentemente de limitações físicas, sensoriais, cognitivas ou tecnológicas, consigam **perceber, operar, compreender e interagir** com conteúdos digitais.

Do ponto de vista de Interação Humano-Computador (IHC), a acessibilidade é parte fundamental da usabilidade: uma interface só é realmente usável quando pode ser utilizada pelo maior número possível de pessoas, em diferentes contextos, dispositivos e tecnologias assistivas.

---

## A importância do Guia

A acessibilidade digital não é apenas uma boa prática. Ela é necessária para:

- **Garantir igualdade de acesso à informação e aos serviços digitais**, direito previsto na Lei Brasileira de Inclusão (Lei nº 13.146/2015);
- **Melhorar a experiência de todos os usuários**, pois legendas ajudam em ambientes ruidosos, bom contraste facilita a leitura sob luz forte e navegação por teclado beneficia diferentes perfis de usuários;
- **Atender a normas e padrões de acessibilidade**, como as WCAG (*Web Content Accessibility Guidelines*), o eMAG e a ABNT NBR 17225:2025;
- **Ampliar o alcance dos produtos digitais**, fortalecer a reputação das organizações e reduzir custos de retrabalho, considerando a acessibilidade desde o início do projeto.

---

## Para que serve o Guia

Este guia é um material de consulta e apoio para quem precisa **aplicar ou avaliar a acessibilidade** em sites, sistemas, aplicativos e documentos digitais. Ele reúne orientações práticas que ajudam a identificar e corrigir barreiras de acesso durante o planejamento, desenvolvimento e manutenção de produtos digitais.

## Público-alvo

O conteúdo é destinado a:

- **Desenvolvedores**, responsáveis pela implementação dos requisitos de acessibilidade;
- **Designers**, que projetam interfaces usáveis e inclusivas;
- **Gerentes de projeto**, que organizam entregas e priorizam melhorias;
- **Testadores**, que verificam a conformidade e validam as soluções;
- **Qualquer pessoa interessada** em criar experiências digitais mais acessíveis.

---

## Como funciona o Guia

O guia é organizado em quatro áreas principais, baseadas na estrutura de um checklist de acessibilidade. Juntas, elas contemplam diferentes etapas do ciclo de desenvolvimento de um produto digital. As referências utilizadas estão disponíveis na página [Referências e Ferramentas](../referencias/referencias.md).

- **[Gestão de Projetos](guia_gestao.md):** planejamento da acessibilidade desde o início do projeto, definição de personas diversas, desenho universal, capacitação da equipe, orçamento e monitoramento contínuo.
- **[Desenvolvimento](guia_desenvolvimento.md):** requisitos técnicos de implementação, como navegação por teclado, foco, semântica HTML, formulários, tabelas, componentes interativos e compatibilidade com tecnologias assistivas.
- **[Design](guia_design.md):** aspectos visuais e de interação, como contraste, foco visível, uso de cores, espaçamento, tipografia, responsividade e consistência da interface.
- **[Conteúdo](guia_conteudo.md):** estrutura e clareza textual, títulos, links, textos alternativos, legendas, audiodescrição, Libras e linguagem inclusiva.

---

## ABNT NBR 17225:2025 e os níveis de conformidade

A **ABNT NBR 17225:2025** estabelece requisitos de acessibilidade para websites no contexto brasileiro, tendo como referência as Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2, desenvolvidas pelo W3C (*World Wide Web Consortium*).

Seu objetivo é reduzir ou eliminar barreiras que dificultam o acesso e a utilização de websites, especialmente por pessoas com deficiência.

A norma utiliza os critérios de sucesso da WCAG, organizados em três níveis de conformidade:

- **Nível A:** representa os requisitos fundamentais de acessibilidade. Para atingir esse nível, todos os critérios de sucesso classificados como A devem ser atendidos.
- **Nível AA:** reúne os requisitos dos níveis A e AA. É o nível geralmente adotado como referência para projetos que buscam uma cobertura abrangente de acessibilidade.
- **Nível AAA:** contempla os requisitos dos níveis A, AA e AAA. Representa um nível mais elevado de acessibilidade, mas não é recomendado como exigência geral para todas as páginas e conteúdos.

Os níveis são cumulativos: para alcançar o nível AA, é necessário atender aos critérios A e AA; para alcançar o AAA, é necessário atender aos três níveis.

### Os quatro princípios da WCAG

A WCAG organiza seus critérios em quatro princípios fundamentais, conhecidos pela sigla POUR:

1. **Perceptível:** as informações e os componentes da interface devem ser apresentados de maneira que os usuários consigam percebê-los. Exemplos: textos alternativos para imagens, legendas e contraste adequado.
2. **Operável:** os componentes e a navegação devem permitir interação por diferentes meios. Exemplos: navegação por teclado, foco visível e tempo adequado para realizar tarefas.
3. **Compreensível:** as informações e o funcionamento da interface devem ser claros e previsíveis. Exemplos: linguagem simples, instruções objetivas e mensagens de erro compreensíveis.
4. **Robusto:** o conteúdo deve ser compatível com diferentes navegadores, dispositivos e tecnologias assistivas, como leitores de tela.

Esses princípios orientam a construção de interfaces que possam ser utilizadas por pessoas com diferentes necessidades e formas de interação.

---

## Principais requisitos de acessibilidade

Entre os requisitos e práticas importantes para a construção de websites acessíveis, destacam-se:

- **Estrutura semântica:** utilização adequada de elementos HTML, como títulos, links, botões, listas e formulários, facilitando a interpretação por tecnologias assistivas.
- **Navegação por teclado:** todas as funcionalidades devem ser acessíveis pelo teclado, com indicação visual do elemento em foco e ordem de navegação lógica.
- **Imagens e elementos visuais:** imagens informativas devem possuir textos alternativos adequados, enquanto imagens decorativas devem ser ignoradas pelas tecnologias assistivas.
- **Legibilidade e apresentação:** textos devem permitir redimensionamento, apresentar contraste adequado e manter sua organização em diferentes tamanhos de tela.
- **Formulários acessíveis:** campos devem possuir rótulos, instruções claras e mensagens de erro que orientem a correção de problemas.
- **Conteúdos multimídia:** vídeos e áudios devem oferecer alternativas apropriadas, como legendas, transcrições e audiodescrição, conforme o tipo de conteúdo.

---

## Avaliação e validação da acessibilidade

A acessibilidade deve ser avaliada durante todo o ciclo de desenvolvimento, e não apenas ao final do projeto.

A avaliação deve combinar diferentes métodos:

- **Testes automatizados:** utilização de ferramentas como WAVE, axe DevTools e Lighthouse para identificar possíveis problemas de acessibilidade.
- **Testes manuais:** verificação de contraste, navegação por teclado, estrutura semântica, formulários e comportamento dos componentes.
- **Testes com tecnologias assistivas:** utilização de leitores de tela, como NVDA e VoiceOver, para verificar a experiência de navegação.
- **Testes com pessoas com deficiência:** participação de usuários com diferentes necessidades para identificar barreiras que podem não ser detectadas por ferramentas automáticas ou avaliações técnicas.

A combinação dessas abordagens permite avaliar não apenas a conformidade técnica, mas também a experiência real de utilização.

---

## Relação entre a NBR 17225:2025 e o Guia de Boas Práticas do Reino Unido

A ABNT NBR 17225:2025 e o Guia de Acessibilidade Digital do Reino Unido (*Accessibility Guidance*), desenvolvido pelo Government Digital Service (GDS), apresentam abordagens complementares para a acessibilidade digital.

A **NBR 17225:2025** estabelece requisitos técnicos para a acessibilidade de websites no Brasil, permitindo avaliar objetivamente se determinados critérios estão sendo atendidos. Sua estrutura está alinhada à WCAG 2.2 e contempla aspectos como contraste, navegação, estrutura semântica, formulários e compatibilidade com tecnologias assistivas.

Já o **Guia do Reino Unido** apresenta orientações práticas para incorporar a acessibilidade ao planejamento e à execução de produtos digitais. Seu conteúdo aborda não apenas aspectos técnicos, mas também design, produção de conteúdo, gestão de projetos e avaliação da experiência dos usuários.

As duas referências compartilham os quatro princípios fundamentais da WCAG: perceptível, operável, compreensível e robusto. Entretanto, possuem finalidades diferentes: enquanto a norma brasileira estabelece requisitos técnicos, o guia britânico auxilia as equipes a aplicar práticas inclusivas durante o desenvolvimento.

Dessa forma, utilizar as duas referências em conjunto permite relacionar a **conformidade técnica com a experiência prática dos usuários**, contribuindo para a criação de produtos digitais mais acessíveis e inclusivos.

---

## Referências normativas e complementares

As principais referências utilizadas na construção deste guia são:

- **ABNT NBR 17225:2025:** Acessibilidade em websites.
- **ABNT NBR 17060:** Acessibilidade em aplicativos de dispositivos móveis.
- **ABNT NBR ISO 24495-1:** Linguagem simples.
- **ABNT NBR 16452:** Acessibilidade na comunicação – Audiodescrição.
- **ABNT NBR 15610-3:** Televisão digital terrestre – Acessibilidade – Língua de Sinais (Libras).
- **W3C – WCAG 2.2:** Diretrizes de Acessibilidade para Conteúdo Web.
- **W3C – WAI-ARIA 1.2:** Aplicações de Internet Ricas e Acessíveis.
- **W3C – ARIA Authoring Practices Guide (APG):** orientações para implementação de componentes acessíveis.

As referências, ferramentas de avaliação e materiais complementares podem ser consultados na página [Referências e Ferramentas](../referencias/referencias.md).
