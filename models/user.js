import mongoose from 'mongoose';

const Schema = mongoose.Schema

const UserSchema = new Schema({
    Fname: {
        type: String, 
        required: true
    },
    Lname: {
        type: String, 
        required: true
    },
    GamesCount: {
        type: Number, 
        required: true
    },
    Friends: {
        type: Number, 
        required: true
    },
    Clips: {
        type: Number, 
    },
})

const User = mongoose.model('User', UserSchema) ;
 
export default User
