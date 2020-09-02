const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

let dokter = require('./dokter');

app.get('/dokter', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(dokter);
})

app.get('/dokter/:specialist', (req,res) => {
    let dokter_specialist = [];
    let specialist = req.params.specialist;
    for (let i = 0; i < dokter.dokter.length; i++) {
        if (dokter.dokter[i].specialist == specialist) {
            dokter_specialist.push(dokter.dokter[i])
        }
    }
    const dokter_obj = {
        dokter_specialist: dokter_specialist
    }
    res.json(dokter_obj)
})

app.get('/dokter/:specialist/:id', (req,res) => {
    let dokter_specialist = {};
    let id = req.params.id;
    for (let i = 0; i < dokter.dokter.length; i++) {
        if (dokter.dokter[i].id == id) {
            dokter_specialist = Object.assign(dokter.dokter[i])
        }
    }
    const dokter_obj = {
        dokter: dokter_specialist
    }
    res.json(dokter_obj)
})

app.listen(3000, () => {
    console.log('Server run at port 3000')
})