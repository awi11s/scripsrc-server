import mongoose from 'mongoose';

const verseSchema = new mongoose.Schema({
    verse: String,
    text: String
});

const chapterSchema = new mongoose.Schema({
    book: String,
    totalChaps: String,
    chapter: String,
    verses: [verseSchema]
})


export default mongoose.model('Chapter', chapterSchema);


