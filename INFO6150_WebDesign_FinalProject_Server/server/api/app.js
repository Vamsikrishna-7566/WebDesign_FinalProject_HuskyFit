import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();


mongoose.connect("mongodb+srv://mukesh:mukesh@cluster0.6z895zk.mongodb.net/flexAppeal?retryWrites=true&w=majority", ()=>{
    console.log('connected to mongoDB');
});


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);

export default app;
