// server.js
import express from 'express';
import initialize from './app.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
// import paymentRoutes from './payment-route.js';
dotenv.config();

const app = express();
//const port = process.env.PORT;

app.use(cors());

app.use(express.json()); 

app.use(express.static('./chef-2-go-frontend/build'));
app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'chef-2-go-frontend', 'build', 'index.html'));
}
);
const port = process.env.PORT;

initialize(app);

app.listen(port, () => console.log(`Server is listening at port ${port}`));
