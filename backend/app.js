// Express Server
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const port = parseInt(process.env.PORT);
app.use(cors())

//Functions
const paginate = require('./middleware/paginate')
const addTotalPaid = require('./service/addTotalPaid')
const getInstallment = require('./service/getInstallment');

// Data
const child = require('./Child.json');
const parent = require('./Parent.json');
const childData = child.data;
const parentData = addTotalPaid(parent.data, childData);

//REST API's
app.get('/', (req, res) => {
    res.send(`Server Is Running ✅ Try APIS => 1. /parent    2. /parent/:id/child`);
})

app.get('/parent', paginate(parentData), (req, res) => {
    res.json(res.paginatedResults)
})

app.get('/parent/:id/child', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(getInstallment(id, childData, parentData));
})

// http://localhost:PORT
app.listen(port, () => {
    console.log(`App is Live on PORT ${port} http://localhost:${port}`)
})