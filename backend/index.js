import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;
const mongoDBuri = process.env.MONGODBURI;

//setup of mongoDB connection
try {
    mongoose.connect(mongoDBuri);
    console.log('mongoDB connected successfully');
} catch (error) {
    console.log("Error:", error);

}
app.use("/book", bookRoute);
app.use("/user", userRoute);
 

app.listen(PORT, () => {
    console.log(`sever is successfully run on ${PORT}`);
});