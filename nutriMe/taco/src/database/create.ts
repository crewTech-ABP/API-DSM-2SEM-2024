import query from "./connection";

async function init() {
  return query(`
        BEGIN;
                
        DROP TABLE IF EXISTS fields, categories, foods;

        CREATE TABLE fields (
            id INTEGER NOT NULL,
            name VARCHAR(50) NULL,
            unit VARCHAR(5) NULL,
            field VARCHAR(30) NULL,
            PRIMARY KEY(id)
        );

        CREATE TABLE categories (
            id INTEGER NOT NULL,
            name VARCHAR(40) NULL,
            PRIMARY KEY(id)
        );

        CREATE TABLE foods (
            id INTEGER NOT NULL,
            category INTEGER  NOT NULL,
            description VARCHAR(70) NULL,
            moisture FLOAT NULL,
            energy FLOAT NULL,
            protein FLOAT NULL,
            lipids FLOAT NULL,
            cholesterol FLOAT NULL,
            carbohydrate FLOAT NULL,
            dietary_fiber FLOAT NULL,
            ash FLOAT NULL,
            calcium FLOAT NULL,
            magnesium FLOAT NULL,
            manganese FLOAT NULL,
            phosphorus FLOAT NULL,
            iron FLOAT NULL,
            sodium FLOAT NULL,
            potassium FLOAT NULL,
            copper FLOAT NULL,
            zinc FLOAT NULL,
            retinol FLOAT NULL,
            re FLOAT NULL,
            era FLOAT NULL,
            thiamin FLOAT NULL,
            riboflavin FLOAT NULL,
            pyridoxine FLOAT NULL,
            niacin FLOAT NULL,
            vitamin_c FLOAT NULL,
            PRIMARY KEY(id),
            FOREIGN KEY(category)
                REFERENCES categories(id)
                ON DELETE RESTRICT
                ON UPDATE CASCADE
        );

        COMMIT;
    `);
}

init()
  .then((r) => console.log("Comandos SQL submetidos ao SGBD"))
  .catch((e) => console.log(e))
  .finally(() => console.log("Finalizado"));
