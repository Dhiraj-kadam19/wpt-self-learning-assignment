const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('index', { message: null });
});
app.post('/submit', (req, res) => {
    let name = req.body.username;

    res.render('index', { message: "Hello " + name });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});