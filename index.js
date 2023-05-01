const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;




app.get('/', (req, res) => {
    res.send('Chef is coming....')
})
app.use(cors())



 app.listen(port, () => {
    console.log(`Dragon API is coming on port: ${port}`)
 })