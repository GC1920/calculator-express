var express = require ("express")
var app = express()

app.use(express.json());

app.listen ( 8000 , () => {
    console.log ("Running on port 8000 ")
});

app.get ("/", (req, res, próximo) => {
    res.json ({"message": "Ok, Server Running!"})
});

app.get("/sum", (req, res) => {
  
  let number1 = parseInt(req.query.number1) ;
  let number2 = parseInt(req.query.number2) ;
  let result = number1 + number2;

  res.send("Result: " + result)
})

app.post("/sum", (req, res) => {

  let number1 = parseInt(req.body.number1) ;
  let number2 = parseInt(req.body.number2) ;
  let result = number1 + number2;

  res.send("Result: " + result)
})