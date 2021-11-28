```bash 
npm init -y
npm i express
npm i -D nodemon
```

in package.json
```json
{ "dev": "nodemon index.js" }
```

in index.js
```js
const express = require('express');
const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
    // if everything works fine, the console will show which port the application is listening to
    console.log(`App listening at port ${PORT}`);
}) 
```
npm run start

## Creating a response
```js
app.get('/', (req, res) => {
  // the logic for processing the request
}); 

// ....
app.get('/', (req, res) => {
    res.send(
        `<html>
        <body>
          <h1>Response from your node js</h1>
        </body>
        </html>`
    );
}); 

// automatic content type

res.send('some text'); //  Content-Type: text/plain
res.send('<p>some html</p>'); //  Content-Type: text/html
res.send({ some: 'json' }); //  Content-Type: application/json

//
app.get('/', (req, res) => {
    res.status(404);
    res.send('<h1>Page not found</h1>');
}); 
```
## Request
```js
app.get('/', (req, res) => {
  res.send(req.query);
}); 
```




