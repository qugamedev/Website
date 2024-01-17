const db = require('./db.js');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');

const PORT = 3002;
const app = express();

const bcrypt = require('bcrypt');
const saltRounds = 7;

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

app.delete("/api/blogs/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM blogs WHERE id = ?", id, (err, result)=> {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error: Could not delete.")
        }
            res.send(result);
    })
})

//CREATE ADMIN
app.put('/api/admins/create', (req, res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds)
    const display = req.body.display;

    db.query("INSERT INTO admin (username, password, display_name) VALUES (?,?,?)", [username, password, display], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error");
            return
        }
        res.status(200).send("Created admin sucessfully.")
    })
})


//DELETE ADMIN
app.delete("/api/admins/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM admin WHERE id = ?", id, (err, result)=> {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error: Could not delete.")
        }
            res.send(result);
    })
})


//UPDATE ADMIN
app.put('/api/admins/put/:id', (req, res) => {
    const id = req.params.id

    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds)
    const display_name = req.body.display_name;

    db.query("UPDATE admin SET username = ?, password = ?, display_name = ? WHERE id = ?", [username, password, display_name, id], (err, result)=>{
        if(err) {
            console.log(err)
            res.status(500).send('Internal server error.')
        }
            res.send(result)
    })
})

//LOGIN FOR ADMINS
app.post('/api/admins/post', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    

    db.query('SELECT * FROM admin WHERE username = ?', [username], async (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Internal server error')
            return
        }
      
        if (results.length > 0) {
            const user = results[0];
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            
            if (isPasswordMatch) {
              res.status(200).send('Login successful')
            } else {
              res.status(401).send('Invalid username or password')
            }
        } else {
            res.status(401).send('Invalid username or password')
        }
    })
})

app.get("/api/admins/get", (req, res) =>{
    db.query("SELECT id, username, password, display_name FROM admin", (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})

app.listen(PORT, ()=>{
    console.log("Up and running.");
});


// START OF EXECS
//CREATE EXECS
app.put('/api/execs/create', (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    const image = req.body.image;

    db.query("INSERT INTO execs (name, title, image) VALUES (?,?,?)", [name, title, image], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error");
            return
        }
        res.status(200).send("Created admin sucessfully.")
    })
})


//DELETE EXECS
app.delete("/api/execs/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM execs WHERE id = ?", id, (err, result)=> {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error: Could not delete.")
        }
            res.send(result);
    })
})


//UPDATE EXECS
app.put('/api/execs/put/:id', (req, res) => {
    const id = req.params.id

    const name = req.body.name;
    const title = req.body.title;
    const image = req.body.image;

    db.query("UPDATE execs SET name = ?, title = ?, image = ? WHERE id = ?", [name, title, image, id], (err, result)=>{
        if(err) {
            console.log(err)
            res.status(500).send('Internal server error.')
        }
            res.send(result)
    })
})

app.get("/api/execs/get", (req, res) =>{
    db.query("SELECT id, name, title, image FROM execs", (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})








// START OF COCHAIRS
//CREATE COCHAIRS
app.put('/api/cochairs/create', (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    const image = req.body.image;

    db.query("INSERT INTO cochairs (name, title, image) VALUES (?,?,?)", [name, title, image], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error");
            return
        }
        res.status(200).send("Created admin sucessfully.")
    })
})


//DELETE EXECS
app.delete("/api/cochairs/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM cochairs WHERE id = ?", id, (err, result)=> {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error: Could not delete.")
        }
            res.send(result);
    })
})


//UPDATE EXECS
app.put('/api/cochairs/put/:id', (req, res) => {
    const id = req.params.id

    const name = req.body.name;
    const title = req.body.title;
    const image = req.body.image;

    db.query("UPDATE cochairs SET name = ?, title = ?, image = ? WHERE id = ?", [name, title, image, id], (err, result)=>{
        if(err) {
            console.log(err)
            res.status(500).send('Internal server error.')
        }
            res.send(result)
    })
})

app.get("/api/cochairs/get", (req, res) =>{
    db.query("SELECT id, name, title, image FROM cochairs", (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})

app.get("/a")