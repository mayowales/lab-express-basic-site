const express = require('express');


const app = express();

app.use(express.static("public"))

app.set("view engine", "hbs");
app.set("views", __dirname + "/views")



app.get("/", (req, res)=>{
   
    const data = {
        userName: "Kobe Bryant"
    }
    res.render("home", data);
});

app.get("/about", (req, res)=>{
    res.render("about");
   
});

app.get("/work", (req, res)=>{
    res.render("work");
   
});

app.listen(3000, () => console.log("listening on 3000..."));