import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connect from './src/config/db.config.js';
import BookRoute from './src/routes/Book.route.js';
import Auth from './src/routes/user.route.js'
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
Connect();

const PORT = process.env.PORT || 8080;

app.use('/api',BookRoute)
app.use('/auth',Auth)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} number`);
})