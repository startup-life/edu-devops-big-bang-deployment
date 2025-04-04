const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// MySQL 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'testpass',
    database: 'testdb',
});

app.get('/users', (req, res) => {
    conn.query('SELECT * FROM users', (err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows);
    });
});

app.use(express.static('./frontend')); // 프론트엔드 정적 파일 제공

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
