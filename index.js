const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash")

//router
const PlansRouter = require("./routes/PlansRouter")

// View engine
app.set('view engine', 'ejs');

app.use(session({
    secret: "qualquercoisa",
    cookie: { maxAge: 30000000 },
    saveUninitialized: true,
    resave: true
}))

app.use(flash());

app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
app.use("/", PlansRouter)

// Router

app.get("/", (req, res) => {
    res.render("index.ejs");
})

// End Router
app.listen(3000, () => {
    console.log("O servidor está rodando!")
})