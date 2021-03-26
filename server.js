const express = require('express')
var cors = require('cors');
const app = express()
const fs=require("fs");
const xlsx=require("xlsx");
let wb=xlsx.readFile("ahmad.xlsx");
let ws=wb.Sheets["Sheet1"];
let data2=xlsx.utils.sheet_to_json(ws);
app.use(cors());

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/ahmad', function (req, res) {
//     res.send('Hello Freinds')
//   })

//   app.get('/data', function (req, res) {
//       var data=[
//         {id:1, title:"title01"},
//         {id:2, title:"title02"},
//         {id:3, title:"title03"},
//         {id:4, title:"title04"},
//         {id:5, title:"title05"},
//         {id:6, title:"title06"}

//       ]
//     res.send(data);
//   })

//   app.get('/data2', function (req, res) {
//     res.json(data2);
//  })

//app.listen(3000)
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));