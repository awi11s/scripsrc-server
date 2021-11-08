import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
import { AuthenticationError } from 'apollo-server';

export const checkAuth = (context) => {
    const header = context.req.headers.authorization;
    
    if (header) {
        // Bearer
        const token = header.split('Bearer ')[1];
        if (token) {
            try {
                const user = jwt.verify(token, process.env.SECRET_KEY);
                return user;
            } catch (err) {
                throw new AuthenticationError('invalid/expired token');
            }
        }
        throw new Error('auth token must be \'Bearer [token]')
    }
    throw new Error('auth header must be provided');

}