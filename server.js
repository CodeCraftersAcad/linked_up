const express = require('express'),
app = express(),
PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/test",(req,res)=>{
    res.json({msg:"test route"});
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})