import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import db from './db.js';
import router from './routes/index.js';
import errorHandlingMiddleware from './middleware/errorHandlingMiddleware.js';

dotenv.config()

const PORT = 5000 || Number(process.env.PORT);

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(errorHandlingMiddleware);

const start = async () => {
    try {
        await db.authenticate();
        await db.sync();
        server.listen(PORT, (err) => err ? console.log(err) : console.log(`Server has started on port: ${PORT}`));
    } catch (error) {
        console.log(error);
    };
};

start();


