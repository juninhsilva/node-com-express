const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user-routes');

port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

userRouter(app);

app.get('/', (req, res) => {
    res.send('Hello');
})
app.listen(port, () => console.log(`rodando na porta ${port}`));