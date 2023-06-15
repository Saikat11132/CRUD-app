import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const port = 8000;

app.use(cors({
    origin:"*"
}))
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes)

dotenv.config();


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);



app.get("",(req,res)=>{
    res.send("Welcome");
})

app.listen(port,()=>{
    console.log(`Server Started at http://localhost:${port}`)
})