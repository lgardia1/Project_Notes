const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static());

const port = 3000;

app.get('/' , (req, resp) =>{
    const cars = [
        { tuition: '1234ABC', brand: 'Toyota', color: 'Rojo' },
        { tuition: '5678DEF', brand: 'Honda', color: 'Azul' },
        { tuition: '9101GHI', brand: 'Ford', color: 'Negro' },
    ];

    resp.send({
        coches: cars
    });
});

app.listen(port, ()=>{
    console.log(`Listen on port: ${port}`);
});