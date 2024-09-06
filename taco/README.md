## Consulta dados da tabela TACO

A tabela TACO (Tabela Brasileira de Composição de Alimentos) contém informações precisas e detalhadas sobre a composição nutricional de uma ampla variedade de alimentos, incluindo frutas, vegetais, carnes, cereais, leguminosas, produtos industrializados, entre outros. Esses dados incluem valores de macronutrientes (proteínas, carboidratos, lipídios), micronutrientes (vitaminas e minerais), e outros componentes como fibras alimentares, colesterol e energia (calorias).

Essa aplicação possui como base de dados os alimentos da tabela TACO. A composição de nutrientes dos alimentos está para 100 g de parte comestível (pág. 26 - https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf).


### Instruções de uso
Utilize os comandos a seguir para clonar o projeto e instalar as dependências.
```
git clone https://github.com/arleysouza/taco-backend.git server
cd server
npm i
```
A aplicação utiliza o SGBD PostgreSQL. Crie um BD no PostgreSQL de nome `bdfood` ou algum outro nome de sua preferência e altere as variáveis de ambiente do arquivo `.env` pelos parâmetros de conexão do SBGD PostgreSQL que você criou.
```
DB_USER = postgres
DB_HOST = localhost
DB_NAME = bdfood
DB_PASSWORD = 123
DB_PORT = 5432
```

### SQL para criar as tabelas
No arquivo `src/database/create.ts` estão as instruções SQL para criar as tabelas no BD.

Execute o comando `npm run create` para submeter as instruções SQL no SGBD. As tabelas estão organizadas da seguinte forma.
![](https://github.com/arleysouza/taco-backend/blob/main/images/modelDB.png)

### Carregar os dados nas tabelas
No arquivo `src/database/load.ts` estão as instruções SQL para carregar os dados nas tabelas.
Execute o comando `npm run load` para submeter as instruções SQL no SGBD.

### Rotas
As rotas possuem o método HTTP GET e os parâmetros são passados no formato de _query parameters_:
- Obter os alimentos por página: http://localhost:3021/food/list?page=5&pagesize=3;
- Obter os alimentos que possuem um termo, por exemplo, _café_: http://localhost:3021/food/search?term=café;
- Obter os dados de um alimento pelo identificador: http://localhost:3021/food/get?idfood=511
- Obter todos os campos: http://localhost:3021/field;
- Obter todas as categorias: http://localhost:3021/category.