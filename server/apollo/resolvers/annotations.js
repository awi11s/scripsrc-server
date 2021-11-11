import { checkAuth } from "../../utils/auth.js";
import Annotation from "../../models/Annotation.js";
import AnnotationSub from "../../models/AnnotationSub.js";

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


    },
    Mutation: {
        async createAnnotation(_, { book, chapter, verse, body }, context) {
            try {
                const user = checkAuth(context);

                const newAnnot = new AnnotationSub({
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
                throw new Error(err)
            }
        }
    }
};

export default annotResolvers;