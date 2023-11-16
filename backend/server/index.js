const db = require('./db.js');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');

const PORT = 3002;
const app = express();

app.use(cors())
app.use(express.json());
app.use(multer().any());

app.get("/api/blogs/get", (req, res)=> {
    db.query("SELECT * FROM blogs", (err,result)=> {
        if(err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Create new
app.put("/api/blogs/create", (req, res) => {
    const author = req.body
    const title = req.body.title;
    const image = req.body.image;
    const body = req.body.body;

    db.query("INSERT INTO blogs (author, title, image, body) VALUES (?,?,?,?)", [author, title, image, body], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error");
            return;
        }
        res.status(200).send("Created blog successfully");
    })
})

// Update Existing
app.put("/api/blogs/put/:id", (req, res) => {
    const id = req.params.id;
    
    const author = req.body.author;
    const title = req.body.title;
    const image = req.body.image;
    const body = req.body.body;

    db.query("UPDATE blogs SET author = ?, title = ?, image = ?, body = ? WHERE id = ?", [author, title, image, body, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error updating blog post');
        }
        
        res.send(result);
    })
})

app.post("/api/blogs/create", (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const image = req.body.image;
    const body = req.body.body;

    db.query("INSERT INTO blogs (author, title, image, body) VALUES (?,?,?,?)",[author, title, image, body], (err,result)=>{
        if (err) {
            console.error(err)
            res.status(500).send('Internal server error')
            return
        }
        res.status(200).send('Created succesfully')
    }) 
})

app.listen(PORT, ()=>{
    console.log("Up and running.");
});


app.get("/a")