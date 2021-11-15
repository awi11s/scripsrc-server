import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    createdAt: String
});

export default mongoose.model('User', userSchema)