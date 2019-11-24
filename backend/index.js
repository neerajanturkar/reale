const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const property = require("./routes/property");
const user = require("./routes/user");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/property',property); 
app.use('/api/user',user);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
mongoose.connect('mongodb://localhost:27017/reale');
mongoose.connection.on('connected', () => {
    console.log("Database connected");
});


app.listen(PORT, () => console.log(`Server started on ${PORT}`));