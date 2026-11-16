# O que é Blueprints em IHC?
Em IHC e design de serviços, o blueprint (ou service blueprint, “planta de serviço”) é um diagrama que mapeia como um serviço funciona de ponta a ponta, mostrando não só o que o usuário vê e faz, mas também tudo o que acontece “por trás dos panos” para que aquela experiência seja possível.

Se o mapa de jornada mostra a experiência do usuário, o blueprint mostra a operação que sustenta essa experiência.

## Estrutura básica

O blueprint é organizado em camadas horizontais, separadas por linhas:

|Camada	|O que representa	|Exemplo (Nota Legal)|
|---|---|---|
|Evidências físicas / digitais	|O que o usuário vê e toca	|Tela de login, saldo, comprovante em PDF|
|Ações do usuário	|O que a pessoa faz em cada etapa	|Digita CPF, escolhe o veículo, confirma abatimento|
|Linha de interação	|Fronteira entre usuário e serviço	||
|Ações de linha de frente (frontstage)	|O que o usuário percebe do serviço	|Interface exibe saldo, atendente no posto ajuda|
|Linha de visibilidade	|Separa o visível do invisível	||
|Ações de bastidor (backstage)	|O que ocorre sem o usuário ver	|Sistema valida CPF, calcula pontos, envia dados à Sefaz|
|Linha de interação interna	|Fronteira entre equipe e sistemas de apoio	||
|Processos de apoio	|Sistemas, equipes e parceiros envolvidos	|Base de notas fiscais, bancos de dados, central de atendimento, órgão responsável pelo IPVA|

Muitas vezes se acrescenta uma camada de tempo/etapas no topo, alinhada à jornada do usuário.

## Para que serve
* identificar falhas operacionais que causam frustrações na jornada (ex.: nota fiscal que demora a aparecer porque a integração com o estabelecimento é lenta);
* revelar dependências entre sistemas, setores e parceiros;
* apontar gargalos, redundâncias e pontos de falha;
* alinhar equipes (design, TI, atendimento, gestão) sobre quem é responsável por cada parte;
* planejar melhorias que resolvam a causa e não só o sintoma.

## Blueprint do Nota Legal

Aplicamos o blueprint a três jornadas que a [inspeção](../resultado/inspecao.md) e o [teste com usuário](../resultado/resultados_avaliacao.md) cobriram. A linha de **backstage** traz hipóteses da equipe, porque a avaliação só enxerga a parte pública do portal.

| Camada | Cadastrar-se | Consultar sorteios | Corrigir um erro de preenchimento |
| :--- | :--- | :--- | :--- |
| **Ação do usuário** | Procura o cadastro e preenche o formulário | Acessa a página de Sorteios pelo menu | Digita uma data em formato errado |
| **Frontstage (o que vê)** | Botão "Quero me cadastrar!" e etapas indicadas ("Passo 2 de 5") | Banners com texto alternativo "Banner 1" e links como "página 1194" | Mensagem "data inválida", sem o formato esperado |
| *Linha de visibilidade* | | | |
| **Backstage (hipótese)** | Validação do CPF e dos dados informados | Páginas publicadas no portal e identificadas por número | Validação do campo sem sugestão de correção |
| **Evidência** | Teste: o botão de cadastro não foi percebido de primeira (tarefa 2) | Inspeção: WCAG 1.1.1 e 2.4.4 | Inspeção: WCAG 3.3.3 e Heurística 9 |
| **Oportunidade** | Destacar o botão de cadastro e indicar a etapa em todo o site | Texto alternativo descritivo e links com o nome do destino | Sugerir o formato: "Use DD/MM/AAAA" |

As oportunidades acima entram nas [recomendações priorizadas](../resultado/conclusao.md) do trabalho.
