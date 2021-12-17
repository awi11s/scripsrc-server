import Chapter from "../../models/Chapter.js";

const versesResolver = {
    Query: {
        async getVerses(_, { book, chapter }) {
            try {
                const verses = await Chapter.find({ book, chapter });
                return verses;
            } catch (err) {
                throw new Error('unable to get verses')
            }
        }
              
    }
}

export default versesResolver;