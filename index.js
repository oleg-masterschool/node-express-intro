const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { PORT = 3001 } = process.env;
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});

app.use(bodyParser.json());
