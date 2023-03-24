const express = require('express');
const cors =require('cors');
const {getAllProducts, connection, updateOne, addOne, addOneUsers, getAllUsers} = require("./Mysql/index.js")

const port = 6001;
const app = express();
app.use(express.json())

const db = require("./Mysql")
app.use(cors());


// Devices
app.get('/api/devices',(req,res)=> {
   getAllProducts((err,results)=>{
    if(err)res.status(500).send(err)
    else res.status(200).send(results)
   })
})

app.put('/api/:id',(req,res)=>{
   updateOne((err,results)=>{
       if(err) res.status(500).send(err)
       else res.status(200).send("updated")
   },[req.body,req.params.id])
})

app.post('/api/devices',(req,res)=>{
   addOne((err,results)=>{
      if(err) res.status(500).send(err)
      else res.status(200).send("Added to Arbi GSM")
  },req.body)
})

//Customers

app.get('/api/customers',(req,res)=> {
   getAllUsers((err,results)=>{
    if(err)res.status(500).send(err)
    else res.status(200).send(results)
   })
})

app.post('/api/customers',(req,res)=>{
   addOneUsers((err,results)=>{
      if(err) res.status(500).send(err)
      else res.status(200).send("Added to Arbi GSM")
  },req.body)
})





app.listen(port, ()=>{
console.log(`listening on ${port}`);
})