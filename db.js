const mysql = require("mysql");
const { localhost, databaseName, user, password } = require("config");

class Db {
  createConnection() {
    return mysql.createConnection({
      host: localhost,
      user: user,
      password: password,
      database: databaseName,
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
