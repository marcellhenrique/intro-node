var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

app.get('/', function(req, res){
    res.send("Hello world S2")
})

app.get('/teste', function(req, res){
    res.send("Rota de teste!")
})

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n")
})

app.all('/test', function(req, res){
    res.send("HTTP method doesnt have any effect on this route!")
})

app.get('/:id', function(req, res){
    res.send("The id you specified is " + req.params.id)
})

app.get('/soma/:op1/:op2', function(req, res){
    let op1= parseInt(req.params.op1)
    let op2= parseInt(req.params.op2)
    let result= op1 + op2
    console.log(op1+op2)
    res.send(result.toString())
})
app.listen(3000)
console.log("eai") 

