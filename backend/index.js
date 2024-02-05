require('dotenv').config();

const express = require("express");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/courses/dataOBJ", (req, res) => {
    const courses = path.join(__dirname, 'courses.json');

    fs.readFile(courses, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const course = JSON.parse(data);
            res.json(course);
        }
    })
})

app.listen(PORT, () => {
    console.log("Server started on port 3001");
})