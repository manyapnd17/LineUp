

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();

let items = ["Eat","Sleep","Code"];
let workItems = ["Add your work here"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/",function(req,res){

   let day = date.getDate();
   res.render("list", {listTitle: day, newlistItems: items});

});

app.post("/", function(req,res){

let item = req.body.newItem;
if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/");
}
// res.render("list",{newlistItem: item});
});


app.get("/work",function(req,res){
  res.render("list", {listTitle: "Work List", newlistItems: workItems});
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});




// var currentDay = today.getDay();
// var day= "";
//
// switch(currentDay){
//   case 0: day = "Sunday";
//   break;
//   case 1:day ="Monday";
//   break;
//   case 2:day ="Tuesday";
//   break;
//   case 3:day ="Wednesday";
//   break;
//   case 4:day ="Thursday";
//   break;
//   case 5:day ="Friday";
//   break;
//   case 6:day ="Saturday";
//   break;
//   default:console.log("Error: Current day is equal to" + currentDay);
// }
