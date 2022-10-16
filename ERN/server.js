import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/",userRoutes);

app.get('/',function(req,res){
    res.send("hi from express");
});

app.all("*",(req,res)=>{
    res.send("That Route doesn't Exist");
});

app.listen(port,function(){

    console.log(`server is running on port: http://localhost:${port}`);

});
