
app.get('/articles', (req, res) => {
// const articles = [];
// code to retrieve an article...
// articles = content;
res.json(content);
});

app.post('/articles', (req, res) => {
// code to add a new article...
res.json(req.body);
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

app.listen(3000, () => console.log('server started'));

