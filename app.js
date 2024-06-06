const express = require("express")
const app = express();
const path = require("path");
const userModel= require("./modules/user")
app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/read", async (req,res)=>{
    let users = await userModel.find();
    res.render("read",{users});
})
app.post("/create", async (req,res)=>{
    let date_time = new Date();
    let {firstname ,lastname ,number,City,LogIN, email  } = req.body;
     let createdUSer = await userModel.create({
        firstname ,
        lastname ,
        number,
        City,
        LogIN, 
        email,
        date_time
     
     });
     res.redirect("/read");
 })
 
app.listen(3000)