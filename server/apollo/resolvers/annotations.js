import { checkAuth } from "../../utils/auth.js";
import Annotation from "../../models/Annotation.js";

const annotResolvers = {
    Query: {
        async getAnnots() {
            try {
                const annots = await Annotation.find().sort({ createdAt: -1});
                return annots;
            } catch (err) {
                throw new Error(err);
            }
        },
        
        async getAnnot(_, { book, chapter, verse }) {
            try {
                const annot = await Annotation.find({ book, chapter, verse });
                return annot;
            } catch(err) {
                throw new Error(err);
            }
        }
        // async getBook() {
        //     try {
        //         const verses = await Books.find()
        //         return verses;
        //     } catch(err) {
        //        console.log("couldn't get annotations"); 
        //     }
        // },

        


    },
    Mutation: {
        async createAnnotation(_, { book, chapter, verse, body }, context) {
            try {
                const user = checkAuth(context);

                const newAnnot = new Annotation({
                    book,
                    chapter,
                    verse,
                    body,
                    id: user.id,
                    username: user.username,
                    createdAt: new Date().toISOString()
                });

                const annot = await newAnnot.save();

                return annot
            } catch(err) {

            }
        }
    }
};

export default annotResolvers;