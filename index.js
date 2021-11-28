const express = require('express');
const path = require("path");
const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
    // if everything works fine, the console will show which port the application is listening to
    console.log(`App listening at port ${PORT}`);
});
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'public/index.html'))
});

app.post('/test', (req, res) => {
    res.send({
        "request": `${req.status}`,
        "body": `${req.body.test}`,
        "test": "value",
        "name": "Paul",
        "surname": "Atreides", });
});


// here we have data
const users = [
    { name: 'Jane', age: 22 },
    { name: 'Hugo', age: 30 },
    { name: 'Juliana', age: 48 },
    { name: 'Vincent', age: 51 }
];

// here's where we'll do our routing
app.get('/users/:user_id', (req, res) => {
    if (!users[req.params.user_id]) {
        res.status(404).send(`This user doesn't exist`);
        // it's important we don't forget to exit from the function
        return;
    }

    const { name, age } = users[req.params.user_id];

    res.send(`User ${name}, ${age} years old ${req.query.test}`);
});

// now the client only has access to public files

