const express = require('express');
const bodyParser = require('body-parser');
const { content } = require('./data/articles.json');
const uuid = require('uuid');

const app = express();

const { PORT = 3001 } = process.env;
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});

app.use(bodyParser.json());

// resource

// GET => SELECT
app.get('/articles', (req, res) => {
// const articles = [];
// code to retrieve an article...
    //open DB connection
    // query DB
    res.json(content);
});

app.get('/articles/:id', (req, res) => {
    const articles = [];
    if (id && id.includes('some_unique_id')) {

        // filtering function
        // exchange authorId to author name
        res.json(content);
    }

    // logs the error
    res.status(404).json({error: 'ID is malformed'})
    // code to retrieve an article...
    //open DB connection
    // query DB
});


app.post('/articles', (req, res) => {
// code to add a new article...
    const article = req.body;
    // author / author id is required
    // test for required attributes
    // if (Object.keys(article).includes('id'))
    // if (Object.keys(article).includes('author'))
    // if (Object.keys(article).includes('text'))
// saved in DB
    const id = uuid.v4();
    res.status(201).json({ id });
});

app.put('/articles/:id', (req, res) => {
    const { id } = req.params;
// code to update an article...
    res.json(req.body);
});

app.delete('/articles/:id', (req, res) => {
    const { id } = req.params;
// code to delete an article...
    res.json({ deleted: id });
});
// POST => CREATE
// PUT => UPDATE
// PATCH
// DELETE => DELETE