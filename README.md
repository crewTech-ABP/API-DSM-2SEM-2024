# projetoBase

Controle de Calorias com React, Node.js, e API TACO
Este projeto é uma aplicação web de controle de calorias, onde o usuário pode registrar os alimentos consumidos diariamente e calcular as calorias e macronutrientes. O projeto utiliza React com TypeScript no frontend e Node.js com Express no backend, além de autenticação JWT, e faz requisições à API TACO (Tabela Brasileira de Composição de Alimentos) para obter dados nutricionais dos alimentos.

# Tecnologias Utilizadas
# Frontend
React: Biblioteca para construção de interfaces de usuário.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Axios: Cliente HTTP para realizar chamadas à API TACO.

# Backend
Node.js: Ambiente de execução JavaScript para o servidor.
Express: Framework web para Node.js.
TypeScript: Também utilizado no backend para maior segurança e escalabilidade.
JWT (JSON Web Token): Para autenticação e controle de sessões de usuário.
Axios: Utilizado para comunicação com a API externa no backend.

# API
TACO API: Utilizada para buscar informações nutricionais de alimentos, como calorias e macronutrientes.
Funcionalidades
Autenticação: Utiliza JWT para registrar e logar usuários.
Registro de Alimentos: Usuário pode adicionar alimentos consumidos ao diário e obter informações nutricionais automaticamente a partir da TACO API.
Controle Diário de Calorias e Macronutrientes: Cálculo automático das calorias e macronutrientes com base nos alimentos registrados.
Histórico de Consumo: O usuário pode visualizar o histórico de consumo diário e comparações mensais.



# TACO-BACKEND
Consulta dados da tabela TACO
A tabela TACO (Tabela Brasileira de Composição de Alimentos) contém informações precisas e detalhadas sobre a composição nutricional de uma ampla variedade de alimentos, incluindo frutas, vegetais, carnes, cereais, leguminosas, produtos industrializados, entre outros. Esses dados incluem valores de macronutrientes (proteínas, carboidratos, lipídios), micronutrientes (vitaminas e minerais), e outros componentes como fibras alimentares, colesterol e energia (calorias).

Essa aplicação possui como base de dados os alimentos da tabela TACO. A composição de nutrientes dos alimentos está para 100 g de parte comestível (pág. 26 - https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf).

Instruções de uso
Utilize os comandos a seguir para rodar o projeto e instalar as dependências.

cd server
npm i
A aplicação utiliza o SGBD PostgreSQL. Crie um BD no PostgreSQL de nome bdfood ou algum outro nome de sua preferência e altere as variáveis de ambiente do arquivo .env pelos parâmetros de conexão do SBGD PostgreSQL que você criou.

DB_USER = postgres
DB_HOST = localhost
DB_NAME = bdfood
DB_PASSWORD = 123
DB_PORT = 5432
SQL para criar as tabelas
No arquivo src/database/create.ts estão as instruções SQL para criar as tabelas no BD.

Execute o comando npm run create para submeter as instruções SQL no SGBD. As tabelas estão organizadas da seguinte forma. 

Carregar os dados nas tabelas
No arquivo src/database/load.ts estão as instruções SQL para carregar os dados nas tabelas. Execute o comando npm run load para submeter as instruções SQL no SGBD.

Rotas
As rotas possuem o método HTTP GET e os parâmetros são passados no formato de query parameters:

Obter os alimentos por página: http://localhost:3021/food/list?page=5&pagesize=3;
Obter os alimentos que possuem um termo, por exemplo, café: http://localhost:3021/food/search?term=café;
Obter os dados de um alimento pelo identificador: http://localhost:3021/food/get?idfood=511
Obter todos os campos: http://localhost:3021/field;
Obter todas as categorias: http://localhost:3021/category.



# SERVER-NUTRIENT
Persistir dados de alimentação
A aplicação tem como objetivo manter o registro dos alimentos consumidos diariamente pelos usuários para o controle de calorias e nutrientes. Os alimentos são divididos em industrializados e não industrializados. As calorias e nutrientes dos alimentos não industrializados foram obtidos na tabela TACO (Tabela Brasileira de Composição de Alimentos). Cada usuário deverá cadastrar as calorias e nutrientes dos alimentos industrizalizados. A aplicação persiste os dados nas seguintes tabelas do SBGD PostgreSQL:

tabela foods: possui os alimentos extraídos da tabela TACO;
tabela categories: possui as categorias dos alimentos da tabela TACO;
tabela products: receberá os produtos de cada usuário. Caberá ao usuário olhar a composição de nutrientes do alimento e fazer o registro;
tabela eat_foods: registro do consumo diário do usuário de alimentos não industrializados;
tabela eat_products: registro do consumo diário do usuário de alimentos industrializados;
tablea profiles: o ideal é incluir outros campos para manter informações relevantes para a dieta do usuário.


Instruções de uso
Utilize os comandos a seguir para rodar o projeto e instalar as dependências.

cd server
npm i
A aplicação utiliza o SGBD PostgreSQL. Crie um BD no PostgreSQL de nome bdnutrient ou algum outro nome de sua preferência e altere as variáveis de ambiente do arquivo .env pelos parâmetros de conexão do SBGD PostgreSQL que você criou.

PORT = 3011
JWT_SECRET = @tokenJWT

DB_USER = postgres
DB_HOST = localhost
DB_NAME = bdnutrient
DB_PASSWORD = 123
DB_PORT = 5432
SQL para criar as tabelas
No arquivo src/database/create.ts estão as instruções SQL para criar as tabelas no BD. Execute o comando npm run create para submeter as instruções SQL no SGBD. As tabelas estão organizadas da seguinte forma.

No arquivo src/database/load.ts estão as instruções SQL para carregar os dados nas tabelas categories, foods e fields. Execute o comando npm run load para submeter as instruções SQL no SGBD.

Rotas
Rotas que não requer login:

HTTP GET /login - usuário efetua o login e obtém o token de acesso;
HTTP POST /user - usuário efetua o seu cadastro para criar uma conta;
HTTP GET /food/search?term=café - obter os alimentos não industrializados que possuem um termo, por exemplo, café;
HTTP GET /food/get?idfood=511 - obter os dados de um alimento não industrializado pelo identificador;
HTTP GET /field - obter todos os campos;
HTTP GET /category - obter todas as categorias dos alimentos não industrializados.
Rotas que requer estar logado, ou seja, é necessário enviar o token no header da requisição:

HTTP PUT /user/alias - usuário altera o nome de usuário da sua conta;
HTTP PUT /user/mail - usuário altera o e-mail da sua conta;
HTTP PUT /user/password - usuário altera a senha de acesso da sua conta;
HTTP GET /profile - usuário obtém os seus dados físicos;
HTTP POST /profile - usuário cria ou altera os seus dados físicos;
HTTP DELETE /profile - usuário remove os seus dados físicos;
HTTP GET /product/search - obtém todos os produtos que satisfazem ao termo de busca e que não são do usuário;
HTTP GET /product/searchbyuser - obtém todos os produtos que satisfazem ao termo de busca e não são do usuário;
HTTP GET /product/byuser - obtém todos os produtos industrializados que o usuário cadastrou;
HTTP POST /product - cria novo produto industrializado;
HTTP POST /product/copy - cada usuário precisa ter os seus próprios produtos, ou seja, o mesmo produto pode existir na conta de vários usuários. Essa operação copia o produto de outro usuário para a conta do usuário;
HTTP PUT /product - atualiza um produto que está na conta do usuário;
HTTP DELETE /product - exclui um produto que está na conta do usuário;
HTTP GET /eat/food e /eat/product - retorna os alimentos consumidos no dia pelo usuário;
HTTP POST /eat/food e /eat/product - cria um consumo de alimento pelo usuário;
HTTP PUT /eat/food e /eat/product - atualiza o registro de consumo de alimento pelo usuário;
HTTP DELETE /eat/food e /eat/product - exclui o registro de consumo de alimento pelo usuário.
Rotas que requer estar logado com o perfil adm:

HTTP GET /user - usuário administrador lista todos os usuários;
HTTP PUT /user/role - usuário administrador altera o perfil de acesso do usuário. Os tipos são user e adm.



# FRONT-NUTRIENT
Gestão de nutrientes de alimentos
Essa aplicação React TS acessa o servidor disponível em https://github.com/arleysouza/server-nutrient. A aplicação permite ao usuário acessar o cadastro de nutrientes dos alimentos e fazer registros diários dos alimentos consumidos. Os alimentos são divididos em:

Alimentos disponíveis na tabela TACO (Tabela Brasileira de Composição de Alimentos);
Alimentos que o usuário cadastra a tabela de nutrientes.
Instruções de uso
Utilize os comandos a seguir para rodar o projeto e instalar as dependências.


cd front
npm i
Antes de subir a aplicação é necessário subir o aplicação servidora https://github.com/arleysouza/server-nutrient.

Na variável REACT_APP_SERVER_URL do arquivo .env está a URL de conexão com o servidor.

Estrutura da aplicação
A aplicação possui as seguintes pastas:

assets: logo da Fatec;
components: componentes React estilizados usando Styled components. Esses componentes são utilizados na composição das páginas;
contexts: definição dos contextos. Os contextos mantém as propriedades de estado (useState) e as operações que são propagadas para os componentes aninhados no componente. Os serviços são consumidos exclusivamente pelos contextos;
hooks: utilizado para propagar as operações e propriedades dos contextos;
pages: possui os componentes que são roteados para páginas. As páginas utilizam os componentes da pasta components;
routes: arquivos de definição de rotas. Existem rotas para usuários "não logados", "usuários logados com o perfil de usuário" e "usuários logados com o perfil de administrador". Cada rota endereça um componente da pasta pages. Desta forma, o usuário só poderá acessar uma página que possui rota para o seu perfil de acesso;
services: possui as classes responsáveis pela conexão com o servidor. Todas as conexões com o servidor são mantidas sometne nesta pasta e todos os métodos dessa pasta são consumidos exclusivamente pelos contextos da pasta contexts;
types: definição de tipos. Aqui todos os tipos foram definidos usando interfaces;
utils: possui funções de uso geral, assim como formatação de datas.
