# O que é Blueprints em IHC?
Em IHC e design de serviços, o blueprint (ou service blueprint, “planta de serviço”) é um diagrama que mapeia como um serviço funciona de ponta a ponta, mostrando não só o que o usuário vê e faz, mas também tudo o que acontece “por trás dos panos” para que aquela experiência seja possível.

Se o mapa de jornada mostra a experiência do usuário, o blueprint mostra a operação que sustenta essa experiência.

## Estrutura básica

O blueprint é organizado em camadas horizontais, separadas por linhas:

## Camada	O que representa	Exemplo (Nota Legal)
Evidências físicas / digitais	O que o usuário vê e toca	Tela de login, saldo, comprovante em PDF
Ações do usuário	O que a pessoa faz em cada etapa	Digita CPF, escolhe o veículo, confirma abatimento
Linha de interação	Fronteira entre usuário e serviço	
Ações de linha de frente (frontstage)	O que o usuário percebe do serviço	Interface exibe saldo, atendente no posto ajuda
Linha de visibilidade	Separa o visível do invisível	
Ações de bastidor (backstage)	O que ocorre sem o usuário ver	Sistema valida CPF, calcula pontos, envia dados à Sefaz
Linha de interação interna	Fronteira entre equipe e sistemas de apoio	
Processos de apoio	Sistemas, equipes e parceiros envolvidos	Base de notas fiscais, bancos de dados, central de atendimento, órgão responsável pelo IPVA

Muitas vezes se acrescenta uma camada de tempo/etapas no topo, alinhada à jornada do usuário.

## Para que serve
identificar falhas operacionais que causam frustrações na jornada (ex.: nota fiscal que demora a aparecer porque a integração com o estabelecimento é lenta);
revelar dependências entre sistemas, setores e parceiros;
apontar gargalos, redundâncias e pontos de falha;
alinhar equipes (design, TI, atendimento, gestão) sobre quem é responsável por cada parte;
planejar melhorias que resolvam a causa e não só o sintoma.
