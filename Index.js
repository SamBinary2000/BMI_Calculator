const { urlencoded } = require("express");
const express=require("express");
const app=express();
app.use(express.urlencoded({
    extended:true
}))
app.get("/",(req,res)=>{
res.sendFile(__dirname+ "/Index.html");
console.log(__dirname);
});


app.post("/submit",(req,res)=>{
const Weight=Number(req.body.Weight);
console.log(Weight);
const Height=Number(req.body.Height);
console.log(Height);
const BMI=Weight/(Height*Height);
res.send(`Your BMI is ${BMI}`);
})


app.listen(3000,()=>{
    console.log("App is listening");
});