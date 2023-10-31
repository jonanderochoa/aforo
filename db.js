const mysql = require("mysql");
const { HOST, DATABASE, USER, PASSWORD } = require("./config.json");

class Db {
  createConnection() {
    return mysql.createConnection({
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
    });
  }

  insertAforo(valor) {
    this.connection = this.createConnection();
    this.connection.connect((err) => {
      if (err) {
        console.error("Error de conexión a la base de datos:", err);
        return;
      }
      console.log("Aforo:", valor);
      this.connection.query(
        "INSERT INTO AFORO (PORCENTAJE) VALUES (?);",
        valor,
        (error, results) => {
          if (error) throw error;
          console.log(results);
        }
      );
      this.connection.end();
    });
  }
}

module.exports = Db;
