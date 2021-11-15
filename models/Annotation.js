import mongoose from 'mongoose';

const annotSchema = new mongoose.Schema({
    book: String,
    chapter: Number,
    verse: Number,
    username: String,
    body: String,
    createdAt: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

export default mongoose.model('Annotation', annotSchema);