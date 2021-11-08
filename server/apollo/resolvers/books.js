import Books from "../../models/Books.js";

const bookResolvers = {
    Query: {
        async getChapter(_, { book }) {
            try {
                const chap = await Books.findOne({ book });

                return chap;
            } catch (err) {
                throw new Error('unable to get chapter')
            }
        }
    }
}

export default bookResolvers;