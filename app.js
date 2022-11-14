const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const login = require('./routes/login');
const register = require('./routes/register');
const tfa = require('./routes/tfa');
const { userObject } = require('./routes/commons');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(login);
app.use(register);
app.use(tfa);

app.get("/users",(req,res)=>{
    console.log({userObject})
    res.status(200).send({userObject})
})

const PORT= process.env.PORT||5000;

app.listen(PORT, () => {
    console.log(`The server started running on port ${PORT}`);
});