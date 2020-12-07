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

app.get("/sum5", (req, res) => {
  
  let number1 = parseInt(req.query.number1) ;
  let number2 = parseInt(req.query.number2) ;
  let number3 = parseInt(req.query.number3) ;
  let number4 = parseInt(req.query.number4) ;
  let number5 = parseInt(req.query.number5) ;
  let result = number1 + number2 + number3 + number4 + number5;

  res.send("Result: " + result)
})

app.get("/sub", (req, res) => {
  
  let number1 = parseInt(req.query.number1) ;
  let number2 = parseInt(req.query.number2) ;
  let result = number1 - number2;

  res.send("Result: " + result)
})

app.get("/sub5", (req, res) => {
  
  let number1 = parseInt(req.query.number1) ;
  let number2 = parseInt(req.query.number2) ;
  let number3 = parseInt(req.query.number3) ;
  let number4 = parseInt(req.query.number4) ;
  let number5 = parseInt(req.query.number5) ;
  let result = number1 - number2 - number3 - number4 - number5;

  res.send("Result: " + result)
})

app.get("/mult", (req, res) => {
  
  let number1 = parseInt(req.query.number1) ;
  let number2 = parseInt(req.query.number2) ;
  let result = number1 * number2;

  res.send("Result: " + result)
})

app.get("/div", (req, res) => {
  
  let number1 = parseInt(req.query.number1) ;
  let number2 = parseInt(req.query.number2) ;
  let result = number1 / number2;

  res.send("Result: " + result)
})

app.get("/maior", (req, res) => {
  
  let number1 = parseInt(req.query.number1) ;
  let number2 = parseInt(req.query.number2) ;
  let number3 = parseInt(req.query.number3) ;
  let number4 = parseInt(req.query.number4) ;
  let number5 = parseInt(req.query.number5) ;
  let number6 = parseInt(req.query.number6) ;
  let number7 = parseInt(req.query.number7) ;
  let number8 = parseInt(req.query.number8) ;
  let number9 = parseInt(req.query.number9) ;
  let number10 = parseInt(req.query.number10) ;

  let vetor = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10]
  var maior = 0;
for (var i = 0; i < vetor.length; i++) {
   if ( vetor[i] > maior ) {
      maior = vetor[i];
   }
}
  console.log(maior)
  res.send(maior)
})

app.post("/sum", (req, res) => {

  let number1 = parseInt(req.body.number1) ;
  let number2 = parseInt(req.body.number2) ;
  let result = number1 + number2;

  res.send("Result: " + result)
})

app.post("/sum5", (req, res) => {

  let number1 = parseInt(req.body.number1) ;
  let number2 = parseInt(req.body.number2) ;
  let number3 = parseInt(req.body.number3) ;
  let number4 = parseInt(req.body.number4) ;
  let number5 = parseInt(req.body.number5) ;
  let result = number1 + number2 + number3 + number4 + number5;

  res.send("Result: " + result)
})

app.post("/sub", (req, res) => {

  let number1 = parseInt(req.body.number1) ;
  let number2 = parseInt(req.body.number2) ;
  let result = number1 - number2;

  res.send("Result: " + result)
})

app.post("/sub5", (req, res) => {

  let number1 = parseInt(req.body.number1) ;
  let number2 = parseInt(req.body.number2) ;
  let number3 = parseInt(req.body.number3) ;
  let number4 = parseInt(req.body.number4) ;
  let number5 = parseInt(req.body.number5) ;
  let result = number1 - number2 - number3 - number4 - number5;

  res.send("Result: " + result)
})


app.post("/mult", (req, res) => {

  let number1 = parseInt(req.body.number1) ;
  let number2 = parseInt(req.body.number2) ;
  let result = number1 * number2;

  res.send("Result: " + result)
})

app.post("/div", (req, res) => {

  let number1 = parseInt(req.body.number1) ;
  let number2 = parseInt(req.body.number2) ;
  let result = number1 / number2;

  res.send("Result: " + result)
})

app.post("/maior", (req, res) => {

  let number1 = parseInt(req.body.number1) ;
  let number2 = parseInt(req.body.number2) ;
  let number3 = parseInt(req.body.number3) ;
  let number4 = parseInt(req.body.number4) ;
  let number5 = parseInt(req.body.number5) ;
  let number6 = parseInt(req.body.number6) ;
  let number7 = parseInt(req.body.number7) ;
  let number8 = parseInt(req.body.number8) ;
  let number9 = parseInt(req.body.number9) ;
  let number10 = parseInt(req.body.number10) ;

  let vetor = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10]
  var maior = 0;
for (var i = 0; i < vetor.length; i++) {
   if ( vetor[i] > maior ) {
      maior = vetor[i];
   }
}
  console.log(maior)
  res.status(200).send("Ok")

})