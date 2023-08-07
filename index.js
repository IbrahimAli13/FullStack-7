const express = require('express')
const app = express()
const bodyParser = require('body-parser')



app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: true }))


app.get('/',(req, res) => {
res.sendFile(__dirname + '/index.html');
})
app.get('/logIn',(req, res) => {
res.sendFile(__dirname + '/public/login.html');
 
})

app.post('/logIn',(req, res) => {

number1 = Number(req.body.Num1)
number2 = Number(req.body.Num2)
result = number1 * number2
res.send("The Multiplication Result " + result)

})
app.get('/deadpool',(req, res) => {
res.sendFile(__dirname + '/public/DeadPool.html');
})



app.listen(3001 , () => {
    
    
 console.log('server is running');   
    
    
})
