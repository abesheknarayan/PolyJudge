import express from 'express';
import { config } from '../config/config';

const app = express();
const port = process.env.PORT ? process.env.PORT : config.express.port;


app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});