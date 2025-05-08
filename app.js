import express from 'express';
import fileUpload from 'express-fileupload';
import prodRouter from './routes/product.route.js'

const app = express();

app.use(express.json());
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
    abortOnLimit: true, }
));

app.use('/prod',prodRouter);

export {app}
