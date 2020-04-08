const express = require('express');
const app = express();
const mongoose = require('mongoose');

const flash = require('express-flash');
app.use(flash());

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.js');
require('./server/config/routes')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log("listening on port 8000"));