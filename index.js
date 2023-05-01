const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

const chefs = require('./data/chefs.json');



app.get('/', (req, res) => {
    res.send('Chef is coming....')
})
app.use(cors())

app.get('/chefs', (req, res)=> {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res)=> {
    const id = req.params.id;
    const chefDetails = chefs.find(chef => chef.id == id)
    res.send(chefDetails)
})

 app.listen(port, () => {
    console.log(`Dragon API is coming on port: ${port}`)
 })