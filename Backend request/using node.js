const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('static'));

// Add customer to database
app.post('/add_customer', (req, res) => {
    const { c_name, c_number } = req.body;
    // Add database interaction logic here
    res.json({ message: 'Customer added successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
