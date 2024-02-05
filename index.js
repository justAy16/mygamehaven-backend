import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.js';
import UserRoute from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config()


const app=express()
const mongoUser=process.env.MONGOUSER
const mongoPass=process.env.MONGOPASS
const port=process.env.PORT

app.use(cors())
app.use(express.json())



const mongo = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.t8nbql8.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(mongo)
.then(() => {
    console.log('Connected to the database');

    app.use('/users', UserRoute);
     // await User.insertMany([
        
        
        // { Fname: 'Shakoloko', Lname: 'Allejandro', GamesCount: '3', Friends: '17', Clips: '28' },
      
    //   ]); console.log('uploaded')

    app.listen(port, () => {
      console.log('Server is running on port', port);
    });
  })
.catch((err)=>console.log(err))