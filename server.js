const express = require('express');
const app = express();

let dokter = require('./dokter');

app.get('/dokter', (req,res) => {
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

app.listen(3000, () => {
    console.log('Server run at port 3000')
})