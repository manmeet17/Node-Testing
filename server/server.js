const express = require('express');
var app=express();

app.get('/',(req,res)=>{
  res.status(404).send({
    error:"Page Not Found",
    name:'To do App v1.0'
  });
});

app.get('/users',(req,res)=>{
  var arr=[{
    Name:"Manmeet",
    Age:19
  },
  {
    Name:"John",
    Age:21
  },
  {
    Name:'Tron',
    Age:20
  }
];
  res.status(200).send(arr);
});

app.listen(3000);


module.exports.app=app;
