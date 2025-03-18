

import express from "express";
import { middleware } from "./middleware";

const app = express();

app.post('/signup', (req,res)=>{
     
})
app.post('/login', (req,res)=>{

})
app.post('/room', middleware,(req,res)=>{
     
})
app.listen(3000,()=>{
     console.log("Server is running on port 3000");
})
