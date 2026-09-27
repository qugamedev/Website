const express = require('express');
const cors = require('cors');
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projectsdb',
})
const app = express()
app.use(cors());
app.listen(4000, () => {
    console.log("working");
})

app.get('/projectsdb', (req, res) => {
    const sql = "SELECT * FROM projects";
    db.query(sql, (err, result) => {
        if (err) res.json(err);
        return res.json(result);
    });
});

app.post('/projectsdb', async (req, res) => {
    const sql = "INSERT INTO projects (`email`, `gameDevs`, `gameTitle`, `gameDesc`, `gameUrl`, `gameTriggers`, `gameImg`, `comments` VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.email,
        req.body.gameDevs,
        req.body.gameTitle,
        req.body.gameDesc,
        req.body.gameUrl,
        req.body.gameTriggers,
        req.body.gameImg,
        req.body.comments
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})