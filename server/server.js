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
app.use(express.json())
app.listen(4000, () => {
    console.log("working");
})

app.get('/projectsdb', (req, res) => {
    const sql = 'SELECT id, gameTitle, gameDevs, gameDesc, gameUrl, gameTriggers, gameImg FROM projects';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("GET Error:", err);
            return res.status(500).json({ error: 'Failed to fetch projects.' });
        }
        return res.json(results);
    });
});

app.post('/projectsdb', (req, res) => {
    const requiredFields = ['email', 'gameDevs', 'gameTitle', 'gameDesc', 'gameUrl'];
    for (const field of requiredFields) {
        if (typeof req.body?.[field] !== 'string' || req.body[field].trim() === '') {
            return res.status(400).json({ error: `Field '${field}' is required` });
        }
    }
    // Validate Queen's email
    const emailRegex = /^[^\s@]+@queensu\.ca$/i;
    if (!emailRegex.test(req.body.email)) {
        return res.status(400).json({
            error: "Invalid Queen's email address"
        });
    }
    // Validate itch.io game URL
    let gameUrl;

    try {
        gameUrl = new URL(req.body.gameUrl);
    } catch {
        return res.status(400).json({
            error: "Invalid game URL"
        });
    }

    if (
        gameUrl.protocol !== "https:" ||
        !/^[a-z0-9-]+\.itch\.io$/i.test(gameUrl.hostname)
    ) {
        return res.status(400).json({
            error: "Game URL must be a valid HTTPS itch.io link"
        })
    }
    
    const sql = `INSERT INTO projects (email, gameDevs, gameTitle, gameDesc, gameUrl, gameTriggers, gameImg, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        req.body.email,
        req.body.gameDevs,
        req.body.gameTitle,
        req.body.gameDesc,
        req.body.gameUrl,
        req.body.gameTriggers,
        req.body.gameImg,
        req.body.comments
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("POST ERROR CODE:", err.code);
            console.error("POST ERROR MESSAGE:", err.message);
            return res.status(500).json({ error: 'An error occurred while inserting the project.' });
        }
        return res.status(201).json({ message: 'Project inserted successfully.', id: data.insertId });
    });
});