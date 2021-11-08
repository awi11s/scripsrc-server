import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
    book: String,
    chapters: [
        {
            chapter: String,
            verses: [
                {
                    verse: String,
                    text: String
                }
            ]
        }
    ]  
});

export default mongoose.model('Books', booksSchema);


