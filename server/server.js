const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let positions = [
    { id: 1, name: "Software Engineer" },
    { id: 2, name: "Data Scientist" },
    { id: 3, name: "Product Manager" }
];

app.get('/api/positions', (req, res) => {
    res.json(positions);
});

app.post('/api/positions', (req, res) => {
    const newPosition = req.body;
    positions.push(newPosition);
    res.status(201).send();
});

app.put('/api/positions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPosition = req.body;

    positions = positions.map(position => {
        if (position.id === id) {
            return { ...position, ...updatedPosition };
        }
        return position;
    });

    res.status(200).send();
});

app.delete('/api/positions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    positions = positions.filter(position => position.id !== id);
    res.status(200).send();
});

app.listen(port, () => {
    console.log('Server is runnning');
});