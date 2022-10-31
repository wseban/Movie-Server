const mysql = require('mysql2');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movie_db'
    },
);
db.promise().query("SELECT * FROM reviews").then(([database]) => {
    console.table(database)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes to listen for...

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);