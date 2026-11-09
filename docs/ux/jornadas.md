# O que são Jornadas em IHC?
Em Interação Humano-Computador (IHC), jornada (ou jornada do usuário, user journey) é a sequência de etapas, ações, pensamentos e emoções pelas quais uma pessoa passa ao tentar atingir um objetivo usando um produto, sistema ou serviço, do primeiro contato até a conclusão da tarefa (e, muitas vezes, depois dela).

## Ideia central

Em vez de olhar para uma tela ou funcionalidade isolada, a jornada olha para a experiência completa ao longo do tempo. Por exemplo, a jornada de alguém que quer pedir comida por um aplicativo inclui: descobrir o app, instalar, criar conta, escolher o restaurante, montar o pedido, pagar, acompanhar a entrega, receber e avaliar.

## O que costuma compor uma jornada
* Persona ou usuário: quem vive a jornada.
* Objetivo: o que a pessoa quer alcançar.
* Etapas: fases do processo (ex.: descoberta, consideração, uso, suporte).
* Ações: o que o usuário faz em cada etapa.
* Pontos de contato (touchpoints): onde ocorre a interação (site, app, e-mail, atendimento, loja física).
* Emoções e pensamentos: satisfação, frustração, dúvidas, expectativas.
* Dores (pain points): obstáculos e frustrações.
* Oportunidades: onde o design pode melhorar a experiência.
* Mapa de jornada (journey map)

É a representação visual da jornada, geralmente em formato de linha do tempo, com uma curva emocional mostrando os altos e baixos da experiência. Serve para:

* identificar problemas e gargalos;
* alinhar equipes (design, desenvolvimento, negócio) em torno da perspectiva do usuário;
* priorizar melhorias;
* gerar empatia com quem usa o produto.

## Jornada x fluxo de usuário
Fluxo de usuário (user flow): foca nos caminhos e decisões dentro do sistema (telas, cliques, condições).
Jornada: tem escopo mais amplo, incluindo o contexto, os sentimentos e os momentos fora do sistema.

# Jornadas no Nota Legal
As seguintes jornadas foram elaboradas considerando as personas propostas no capítulo anterior.

## Jornada 1: Maria das Graças (persona primária)

Objetivo: consultar o saldo de pontos e abater o valor do IPVA do carro.
Contexto: acessa pelo celular, em casa, duas vezes ao ano, geralmente perto do vencimento do IPVA.

|Etapa	|Ações|	Pensamentos|	Emoção	|Dores|	Oportunidades|
|---|---|---|---|---|---|
|1. Motivação|  Recebe o aviso do IPVA ou lembra do programa.	|“Será que tenho crédito para abater?”|	😐 Neutra	|Esquece como acessar.|	Lembretes por WhatsApp/SMS com link direto.|
|2. Acesso	|Busca “Nota Legal” no Google e escolhe um resultado.|	“Qual é o site certo?”	|😟 Insegura|	Pode cair em site falso ou desatualizado.|	Domínio oficial bem posicionado e selo de segurança visível.|
|3. Login	|Digita CPF e senha, ou tenta recuperar a senha.	|“Qual era a senha? Vou ligar para meu filho.”|	😠 Frustrada	|Senha esquecida, captcha difícil, recuperação confusa.|	Login simples, opção de mostrar senha, recuperação por passos.|
|4. Consulta do saldo|	Procura quanto tem de crédito.	|“Cadê o meu saldo? O que é ‘crédito tributário’?”|	😕 Confusa	|Termos técnicos, informações espalhadas, letras pequenas.|	Saldo em destaque na primeira tela, em linguagem simples (“Você tem R$ X para usar”).|
|5. Uso do crédito no IPVA|	Procura a opção de abater o IPVA e escolhe o veículo.|	“Estou fazendo certo? E se eu errar?”	|😰 Ansiosa	|Menu confuso, medo de erro irreversível.|	Assistente passo a passo, resumo antes de confirmar, botões grandes.|
|6. Confirmação	|Confirma e procura um comprovante.|	“Deu certo? Preciso guardar isso?”	|😊 Aliviada, se tudo estiver claro|	Falta de feedback claro.|	Mensagem de sucesso em linguagem simples, comprovante em PDF e envio por WhatsApp.|
|7. Pós-uso|	Conta ao marido ou pede para o filho conferir.	|“Será que o desconto veio no boleto?”|	😐 Dúvida residual	|Não vê onde acompanhar o abatimento.|	Painel de acompanhamento e aviso quando o abatimento for aplicado.|

Resumo emocional: começa neutra, cai nas etapas de login e entendimento do saldo e se recupera ao receber a confirmação.
Prioridades de design: letras grandes, vocabulário simples, saldo em destaque, fluxo guiado, ajuda contextual.

## Jornada 2: Lucas Ferreira (persona primária)

Objetivo: consultar pontos, indicar crédito para o IPTU e conferir se os estabelecimentos onde comprou estão cadastrados.
Contexto: acessa pelo celular (modo mobile), com pressa, de forma autônoma.

|Etapa	|Ações|	Pensamentos|	Emoção	|Dores|	Oportunidades|
|---|---|---|---|---|---|
|1. Motivação|	Lembra que o IPTU vence em breve ou que acumulou notas.	|“Preciso indicar o crédito antes do prazo.”|	😐 Objetivo	|Falta de notificação sobre prazos.	|Notificações push e e-mail com prazo e saldo.|
|2. Acesso e login	|Abre o site ou app e faz login.	|“Tomara que salve meu login.”	|😊 / 😒	|Pede dados repetidos, sessão expira, captcha.|	Login único (gov.br), biometria, sessão persistente.|
|3. Consulta de pontos	|Verifica saldo e extrato de notas.|	“Quanto tenho e de onde veio?”	|😊 Satisfeito se for rápido	|Lentidão, tabelas que não se adaptam ao celular.|	Dashboard responsivo, filtros e busca rápida.|
|4. Verificação de estabelecimentos	|Procura se o local onde comprou está cadastrado.	|“Esse mercado aparece? Por que minha nota não entrou?”|	😤 Impaciente|	Busca limitada, sem filtro por CNPJ ou nome.|	Busca por CNPJ ou nome com resultado imediato e explicação de pendências.|
|5. Indicação de crédito para o IPTU	|Escolhe o imóvel e o valor, e confirma.	|“Já informei o número do imóvel antes, por que pede de novo?”|	😡 Irritado se repetir dados	|Campos repetidos, muitos cliques, formulário que trava.	|Dados salvos e pré-preenchidos, fluxo em até 3 toques.|
|6. Confirmação	|Recebe o comprovante e confere.	|“Beleza, resolvido.”	|😊 Satisfeito|	Sem comprovante imediato ou sem registro no histórico.|	Confirmação instantânea, comprovante digital e histórico acessível.|
|7. Pós-uso|	Fecha o app.| Pode comentar nas redes se houver problema.|	“Podia ser mais rápido.”	😐 / 😊|	Nenhum canal rápido de feedback.|	Avaliação de 1 toque e atalhos para a próxima vez.|

Resumo emocional: relativamente estável. A irritação surge com lentidão, travamentos e dados repetidos.
Prioridades de design: agilidade, mobile-first, pré-preenchimento, poucos cliques, estabilidade.

## Jornada 3: Seu Joaquim (persona secundária, acessibilidade)

Objetivo: consultar a quantidade de pontos.
Contexto: tenta em casa, com ajuda eventual dos netos, e acaba recorrendo ao atendimento presencial.

|Etapa	|Ações|	Pensamentos|	Emoção	|Dores|	Oportunidades|
|---|---|---|---|---|---|
|1. Motivação	|Quer saber se tem pontos ou crédito.	|“Será que tenho algum dinheiro lá?”|	😐 Curioso|	Não sabe por onde começar.	|Canal de atendimento telefônico ou por voz como alternativa.|
|2. Pedido de ajuda|	Chama o neto para abrir o site.|	“Não quero ficar dependendo dos outros.”|	😞 Dependente|	Sem autonomia, depende da disponibilidade da família.	|Interface simples e autoexplicativa.|
|3. Acesso ao site|	Tenta ler a página inicial.|	“Não consigo ler essas letras.”	|😣 Frustrado|	Fonte pequena, baixo contraste, muitas informações.	|Alto contraste, ajuste de fonte, página inicial enxuta.|
|4. Login|	Tenta digitar CPF e senha, ou depende do neto.	|“Que senha é essa? Não lembro.”|	😠 Irritado|	Senha complexa, captcha visual inacessível, erros sem explicação.	|Captcha acessível, mensagens claras, login assistido.|
|5. Navegação e consulta|	Tenta achar a área de pontos, com leitor de tela ou teclado.|	“Onde está isso? Não acho.”|	😩 Perdido	|Menus inacessíveis por teclado, falta de rótulos e texto alternativo, ordem de foco confusa.|	Conformidade com WCAG/eMAG, navegação por teclado, compatibilidade com leitores de tela.|
|6. Desistência|	Desiste e decide ir ao posto de atendimento.|	“Isso não é pra mim. Prefiro falar com uma pessoa.”	|😔 Excluído|	Perda de tempo, deslocamento, sensação de exclusão digital.|	Atendimento telefônico, WhatsApp com áudio, agendamento no posto.|
|7. Atendimento presencial|	Vai ao posto e resolve com um atendente.|	“Aqui sim, é fácil.”	|😌 Aliviado|	Filas e deslocamento.|	Mostrar no posto como acessar sozinho, com treinamento e material impresso.|

Resumo emocional: curva descendente até a desistência e leve recuperação só no atendimento presencial.
Prioridades de design: acessibilidade (contraste, fonte ajustável, teclado, leitor de tela), fluxo mínimo e canais alternativos.

## Comparativo rápido
||Maria|	Lucas|	Joaquim|
|---|---|---|---|
|Maior barreira	|Linguagem técnica e insegurança|	Lentidão e dados repetidos|	Acessibilidade|
|Momento crítico	|Entender o saldo	|Indicar o crédito|	Navegar e fazer login|
|Necessidade-chave|	Clareza e orientação|	Agilidade e autonomia|	Acessibilidade e simplicidade|
|Risco	|Pedir ajuda ou desistir	|Reclamar e abandonar	|Exclusão digital|
