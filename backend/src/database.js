import mysql from "mysql";

let connection;

export const db = {
  connect: () => {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      socketPath: process.env.DB_SOCKET,
    });
    connection.connect();
  },
  query: (queryString, escapedValues) => {
    return new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (err, results, fields) => {
        if (err) reject(error);
        resolve({ results, fields });
      });
    });
  },
  end: () => connection.end(),
};
