var express = require("express");
var app = express();
var PORT = 8080; // default port 8080

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

// GENERATING A RANDOM STRING FOR A SHORT URL
function generateRandomString() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

// URL DATABASE - KEY = SHORT URL : VALUE = LONG URL
const urlDatabase = {
    "b2xVn2": "http://www.lighthouselabs.ca",
    "9sm5xK": "http://www.google.com"
};

// HOME PAGE - HELLO
app.get("/", (req, res) => {
    res.end("Hello!");
});

// DATABASE WITH JSON
app.get("/urls.json", (req, res) => {
    res.json(urlDatabase);
});

// HELLO WORLD PAGE
app.get("/hello", (req, res) => {
    res.end("<html><body>Hello <b>World</b></body></html>\n");
});

// DATABASE FORMATTED WITH EJS
app.get("/urls", (req, res) => {
    let templateVars = {
        urls: urlDatabase
    };
    res.render("urls_index", templateVars);
});

// URLS NEW ENTRY PAGE FOR USER
app.get("/urls/new", (req, res) => {
    res.render("urls_new");
});

// POST THE NEW GENERATED SHORT URL - LONG URL IN THE DATABASE
app.post("/urls", (req, res) => {
    let shortURL = generateRandomString();
    let longURL = req.body.longURL;
    urlDatabase[shortURL] = longURL;
    res.redirect("/urls");
});

// PAGE SHOWING THE SINGLE URL AND LONG URL
app.get("/urls/:id", (req, res) => {
    let shortURL = req.params.id;
    let longURL = urlDatabase[shortURL];
    let templateVars = {
        shortURL: shortURL,
        longURL: longURL
    };
    res.render("urls_show", templateVars);
});

// PAGE TO THE LONG URL
app.get("/u/:shortURL", (req, res) => {
    const longURL = urlDatabase[req.params.shortURL];
    if (longURL === undefined) {
        res.status(404).send("Not Found");
    } else {
        res.redirect(301, longURL);
    }
})

app.post("/urls/:id/delete", (req, res) => {
    let shortURL = req.params.id;
    delete urlDatabase[shortURL];
    res.redirect("/urls");
});

// APP LISTENING TO PORT
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});



// We also need to handle the POST requests on the server.

// Add a POST route that removes a URL resource: POST /urls/:id/delete

// (You will probably need Javascript's delete operator to remove the URL)

// After the resource has been deleted, redirect the client back to the urls_index page ("/urls").
