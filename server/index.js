import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();


app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://atharv:sudha123456@cluster0.q2bru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT= process.env.PORT || 5000;

app.use('/posts', postRoutes);
mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`)))
.catch((err)=> console.log(err.message));

