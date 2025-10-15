const express = require('express');
const cors = require('cors'); // <-- add this line

const app = express();

app.use(cors());

const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const data = await fetch('https://fakestoreapi.com/products')
        const products = await data.json()
        res.send(products)
    } catch (error) {
        res.status(500).send({error: 'Failed to fetch products'})
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});