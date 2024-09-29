const express = require('express');
const cors = require('cors');
const path = require('path')
require('dotenv').config();
const port = process.env.PORT||5000;
const app = express();
const ideasRouter = require('./routes/ideas');
const connectDB = require('./config/db');


connectDB();

app.use(express.static(path.join(__dirname,'public')));

//body parse middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(cors({
//     origin: ['http://localhost:5000/','http://localhost:3000/'],
//     credentials: true
// }))

app.use(cors())

app.get('/', (req,res) => {
    // res.send({message:'Hello World'})
    res.json({message:'Hello World'})
})
app.use('/api/ideas',ideasRouter)
app.listen(port, () => console.log(`Server is listening on ${port}`));