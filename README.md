[![crewTech](https://iili.io/dUlXRI4.jpg)](https://iili.io/JjTNGN1.jpg)

<div align="center">
<h1>
<a  href="#bookmark_tabs-entregas-de-sprints">Entrega das Sprints</a> | <a  href="https://trello.com/b/ZViB82xY/abp-segundo-semestre-crewtech">Trello</a> | <a  href="#bust_in_silhouette-user-stories">User Story</a> | <a  href="#triangular_flag_on_post-backlog-do-produto">Backlog do Produto</a> | <a  href="#chart_with_downwards_trend-gráfico-burndown-das-sprints">Burndown</a> | <a  href="#page_facing_up-wireframe">Wireframe</a> | <a  href="#busts_in_silhouette-equipe">Equipe</a> | <a  href="Requisitos de Cliente 1DSM - 2024-1.pdf">Requisitos</a>
</h1>
</div>

# :pencil: Sobre a Organização

“A **CrewTech** é uma empresa de tecnologia e desenvolvimento de software, criada por alunos da FATEC como parte do projeto ABP. Fundada com o objetivo de integrar o conhecimento acadêmico ao mundo real, nossa empresa se dedica a desenvolver soluções inovadoras e eficientes para os desafios do mercado de tecnologia.”

# :pencil: Sobre o Projeto

“Este projeto tem como objetivo criar um sistema para o gerenciamento de alimentação e nutrição, permitindo que os usuários registrem suas refeições, monitorem suas metas nutricionais e tenham acompanhamento de nutricionistas..”

### Status do Projeto: Em produção

# :bookmark_tabs: Entregas de Sprints

Os entregáveis serão realizados conforme as datas previamente acordadas com o cliente, acompanhados de um relatório completo do progresso alcançado durante as sprints.

| Sprint  | Previsão de Entrega   | Status                      | Backlog das Sprints                                       | Retrospectiva das Sprints
| ------- | --------------------- | --------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| :one:   | :calendar: 20/09/2024 | :green_square: Em andamento         | :round_pushpin: [Ver Relatório](caminhoDoArquivo) | :round_pushpin: [status](caminhoDoArquivo)   |
| :two:   | :calendar: 11/10/2024 |        ||  |
| :three: | :calendar: 08/11/2024 |        | |  |

# :triangular_flag_on_post: Backlog do Produto

| Prioridade | Task                                      | User Story                                                   | Definition of Done                                                                                                                                                                     |
|------------|-------------------------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alta :red_square:       | Cadastro de Usuário                      | Como um novo usuário, eu desejo criar uma conta no aplicativo, para que possa começar a monitorar minha alimentação.   | ► o	Permitir que novos usuários se cadastrem no aplicativo com nome, e-mail e senha. <br>► Validação dos campos de entrada. <br>► Armazenamento dos dados do usuario no banco de dados. <br>► o	Criptografar a senha do usuário antes de armazená-la no banco de dados. |
| Alta :red_square:       | Login do Usuário                    | Como um usuário registrado, eu quero acessar o sistema, para que possa iniciar ou continuar o registro da minha alimentação.  | ► o	Implementar funcionalidade de login para que o usuário se autentique com e-mail e senha. <br> ► o	Validar as credenciais de login do usuário.|
| Alta :red_square:       | Registro de Alimentos                    | Como um usuário registrado, eu desejo registrar os alimentos consumidos ao longo do dia, para que possa acompanhar minha ingestão calórica e nutricional.  | ► o	Adicionar funcionalidade para registrar alimentos consumidos ao longo do dia. <br>  ► o	Integrar banco de dados de alimentos para selecionar alimentos registrados. <br> ► o	Calcular automaticamente as calorias e nutrientes dos alimentos adicionados. <br> ► o	Permitir que o usuário ajuste as porções e quantidades.|
| Média :yellow_square:       | Monitoramento da Ingestão Diária                  | Como um usuário registrado, eu quero visualizar um resumo da minha ingestão diária de calorias e nutrientes, para que possa monitorar meu progresso em relação às metas estabelecidas. | ► o	Exibir resumo da ingestão diária de calorias e nutrientes do usuário. <br> ► o	Implementar funcionalidade de filtragem de ingestão por data. <br>  ► o	Indicar se o usuário está dentro ou fora da meta diária de calorias.|
| Média :yellow_square:       | Definição de Metas                | Como um usuário registrado, eu desejo definir metas diárias de calorias e nutrientes, para que o sistema me notifique quando eu estiver próximo ou exceder essas metas. | ► o	Permitir que o usuário defina metas diárias para calorias, carboidratos, proteínas e gorduras. <br>► o	Notificar o usuário quando ele estiver próximo de atingir ou exceder suas metas.|
| Média :yellow_square:       | Perfil Nutricional               | Como um usuário registrado, eu desejo visualizar um perfil nutricional completo com informações sobre minha ingestão média de cada nutriente, para que possa identificar possíveis deficiências ou excessos na minha alimentação. | ► o	Gerar relatórios com informações nutricionais médias do usuário. <br>► o	Exibir possíveis deficiências ou excessos nutricionais.|
| Alta :red_square:       | Login de Administrador             | Como um administrador, eu desejo fazer login no sistema com minhas credenciais, para que eu possa gerenciar usuários, nutricionistas e dados do sistema. | ► o	Implementar funcionalidade de login para administradores com credenciais únicas.<br>► o	Validar as credenciais de login do administrador. <br>► o	Permitir que o administrador altere sua senha.|
| Alta :red_square:       | Cadastro de Nutricionista               | Como um administrador, eu desejo cadastrar novos nutricionistas no sistema, para que eles possam acompanhar seus pacientes e elaborar planos alimentares personalizados. | ► o	Permitir que administradores cadastrem novos nutricionistas com nome, CRM, especialidade e área de atuação. <br>► o	Validar o CRM do nutricionista. <br>►o	Enviar e-mail com credenciais de acesso ao nutricionista cadastrado.|
| Alta :red_square:       | Gestão de Usuários            | Como um administrador, eu desejo visualizar, editar e excluir usuários cadastrados no sistema, para que eu possa manter a base de usuários atualizada. | ► o	Exibir lista de todos os usuários cadastrados no sistema para o administrador. <br>► o	Permitir que o administrador edite as informações dos usuários (nome, e-mail, senha). <br>► o	Permitir que o administrador exclua usuários do sistema.|
| Média :yellow_square:       | Atribuição de Pacientes a Nutricionistas           | Como um administrador, eu desejo atribuir pacientes a nutricionistas específicos, para que os nutricionistas possam acompanhar seus pacientes de forma personalizada. | ► o	Permitir que o administrador atribua pacientes a nutricionistas específicos. <br>►o	Notificar o nutricionista sobre a atribuição de novos pacientes.|
| Média :yellow_square:       | Criação de Planos Alimentares          | Como um nutricionista, eu desejo criar planos alimentares personalizados para meus pacientes, para que eles possam seguir as recomendações nutricionais de forma organizada. | ► o	Implementar funcionalidade para que o nutricionista crie planos alimentares personalizados para pacientes.<br>► o	Permitir que o nutricionista defina metas nutricionais e crie refeições personalizadas.<br> ►o	Gerar relatórios detalhados do plano alimentar para os pacientes.|
| Média :yellow_square:       | Monitoramento do Progresso dos Pacientes         | Como um nutricionista, eu desejo monitorar o progresso dos meus pacientes, para que eu possa avaliar a eficácia dos planos alimentares e realizar ajustes quando necessário. | ► o	Permitir que o nutricionista monitore o progresso alimentar dos seus pacientes. <br>►o	Gerar relatórios sobre o progresso dos pacientes ao longo do tempo.<br>►o	Permitir que o nutricionista envie mensagens e feedbacks aos pacientes.|




# :chart_with_downwards_trend: Gráfico Burndown das Sprints

| Burndown    | Link de Acesso |
|--------------------------------------------|--------------------------------------------------------------|
| :green_square: Sprint 1 (Em andamento)        | :round_pushpin: [Ver Relatório](/Documentos/GBS1.jpg)        |

# :bust_in_silhouette: User Stories

| Ator                     | Ação                                                                                                                                              | Motivo                                                                                                                                                           |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Como um novo usuário     | eu quero me cadastrar no aplicativo | para que possa começar a registrar minha alimentação.                          |
| Como um usuário cadastrado     | eu quero me logar no sistema          | para que possa começar ou continuar a registrar minha alimentação. 
| Como um usuário cadastrado     | eu quero registrar os alimentos que consumo ao longo do dia                    |para que possa acompanhar minha ingestão de calorias e nutrientes. |
| Como um usuário cadastrado     | eu quero visualizar um resumo da minha ingestão diária de calorias e nutrientes  |para que possa acompanhar meu progresso em relação às minhas metas.|
| Como um usuário cadastrado     | eu quero definir metas diárias de calorias e nutrientes  |para que o sistema possa me alertar quando estiver próximo ou exceder minhas metas. |
| Como um usuário cadastrado     | eu quero visualizar um perfil nutricional completo com informações sobre minha ingestão média de cada nutriente   |para que possa identificar possíveis deficiências ou excessos nutricionais.  |
| Como um administrador    | eu quero cadastrar novos nutricionistas no sistema  |para que eles possam acompanhar seus pacientes e criar planos alimentares personalizados.  |
| Como um administrador    | eu quero fazer login no sistema com minhas credenciais  |eu quero fazer login no sistema com minhas credenciais|
| Como um administrador    | eu quero poder visualizar, editar e excluir usuários cadastrados no sistema  |para que eu possa manter a base de usuários atualizada. |
| Como um administrador    | eu quero poder atribuir pacientes a nutricionistas específicos  |para que os nutricionistas possam acompanhar seus pacientes de forma personalizada.  |
| Como um nutricionista    | eu quero criar planos alimentares personalizados para meus pacientes |para que eles possam seguir as recomendações nutricionais de forma organizada.   |
| Como um nutricionista    | eu quero poder monitorar o progresso dos meus pacientes |para que eu possa avaliar a eficácia dos planos alimentares e fazer ajustes quando necessário.    |

## :wrench: Tecnologias Utilizadas

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)  ![VsCode](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 	![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![Postgre](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## :page_facing_up: Wireframe

<h2><a href="https://www.figma.com/design/HO7bc24EnklK0A4vOWElO6/NutriMe?node-id=0-1&t=t2l1rMgwz9xRzKjj-1">► Clique Aqui para Acessar Todas as Páginas do Wireframe ◄</a></h2>

## :busts_in_silhouette: Equipe

| Função        | Nome                               | GitHub                                                                                                                                        |
| ------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Owner | Maurício Oliveira Medeiros Cepinho | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/maucepinho)    |
| Scrum Master  | Vinícius de Luca Fujarra de Souza  | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/befujarra)         |
| Dev Team      | Gabriel Lima Cavalcante de Souza   | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GabrielLimaDSM)    |
| Dev Team      | Lucas Roque Alvim Cruz             | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lucasroqe)           |         |
| Dev Team      | Marcos Paulo de Souza              | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/marcospaulo27) |        |
| Dev Team      | Gabriel Rodrigues de Paula         | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabriel0067)       |

##### [:rocket: Voltar ao topo ](#bookmark_tabs-entregas-de-sprints)
