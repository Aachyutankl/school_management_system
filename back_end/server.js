var express = require('express');
// var mysql = require('mysql2');
const bodyParser = require("body-parser");
var app = express();
const fse = require('fs-extra');
const jwt = require("jsonwebtoken"); //to generate token
const config = require("./config");
const cors = require("cors"); //To avoid CROS error
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
})
);
/* const nameList = [
    { id: "1", name: "Aachyutan", email: "aachutankl@hnsonline.com", mobileNo: 7845141876 },
    { id: "2", name: "Zulfikar", email: "Zulfikar@hnsonline.com", mobileNo: 8428657858 },
    { id: "3", name: "Vignesh", email: "Vignesh@hnsonline.com", mobileNo: 7845141895 },
    { id: "4", name: "senthil", email: "senthil@hnsonline.com", mobileNo: 8428657822 },
]*/
var models = require('./models');

models.sequelize.sync();

require('./routes')(app);


app.get('/', (req, res) => {
    res.send('Welcome to node.js Aachyutan');
});

/* app.post("/api/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({ error: "username and password required" });
        }
        const data = await fse.readJSON('./users.json');
        const { users } = data;
        const userIndex = users.findIndex(obj => obj.username === username && obj.password === password);
        if (userIndex === -1) {
            return res.status(400).send({ error: "incorrect username or password" });
        }
        const token = jwt.sign({ id: users[userIndex].id, createdAt: Date.now() }, config.JWT_SECRET);
        data.users[userIndex].token = token;
        await fse.writeJSON('./users.json', data);
        return res.status(200).send({ token });
    } catch (ex) {
        console.log("Exception in /api/login: ", ex);
        res.status(500).send({ error: ex.toString() })
    }
});

app.post("/api/logout", async (req, res) => {
    try {
        const token = req.body.token || req.query.token || req.header('Authorization');
        if (!token) {
            return res.status(400).send({ error: "token required" });
        }
        const data = await fse.readJSON('./users.json');
        const { users } = data;
        const userIndex = users.findIndex(obj => obj.token === token);
        if (userIndex === -1) {
            return res.status(400).send({ error: "incorrect token" });
        }
        delete data.users[userIndex].token;
        await fse.writeJSON('./users.json', data);
        return res.status(200).send({ message: "token deleted" });
    } catch (ex) {
        console.log("Exception in /api/logout: ", ex);
        res.status(500).send({ error: ex.toString() })
    }
}) */

app.get('/api/nameList',(req,res)=>{
    res.json({'nameList':nameList})
})


app.listen(5000, () => {
    console.log("Server running in 5000");
});