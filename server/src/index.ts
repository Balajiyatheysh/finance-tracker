// PWD : QWBh2bvk7BzbirSV username:balajiyatheysh87
import express, {Express} from "express";
import mongoose from "mongoose";
import cors from 'cors';
import FinancialRecordRouter from './routes/financial-records';

require('dotenv').config();


const app : Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


mongoose.connect(`${process.env.MONGODB_URI}`).then(()=>console.log("CONNECTED TO MONGODB!")).catch((err)=> console.log("Failed to connect to MongoDB:", err));

app.use("/financial-records", FinancialRecordRouter);

app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});