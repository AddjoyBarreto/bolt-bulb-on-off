const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "client")));

app.get('/',(req,res)=>{
	res.render("index");
})

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));