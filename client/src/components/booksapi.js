import axios from 'axios';

const books = () => {
    const client = axios.create({
        baseURL: "https://bible-api.com"
    });

    return client;
}

export default books;