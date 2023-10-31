const mysql = require("mysql");

class Db {
  createConnection() {
    return mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "scrapper",
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
