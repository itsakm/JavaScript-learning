const express = require('express');
require('dotenv').config();
const port = process.env.PORT||5000;
const app = express();
const ideasRouter = require('./routes/ideas');
const connectDB = require('./config/db');

connectDB();

//body parse middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) => {
    // res.send({message:'Hello World'})
    res.json({message:'Hello World'})
})
app.use('/api/ideas',ideasRouter)
app.listen(port, () => console.log(`Server is listening on ${port}`));