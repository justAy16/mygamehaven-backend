import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.js';

dotenv.config()

const app=express()
const mongoUser=process.env.MONGOUSER
const mongoPass=process.env.MONGOPASS
const port=process.env.PORT

const mongo = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.t8nbql8.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(mongo)
.then(async () =>{
    console.log('connected to db');

    // await User.insertMany([
        
        
    //     { Fname: 'Shakoloko', Lname: 'Allejandro', GamesCount: '3', Friends: '17', Clips: '28' },
      
    //   ]); console.log('uploaded')

    app.listen(port, ()=>{
        console.log('server mount o, e mount')
    })
}).catch((err)=>console.log(err))