var express = require("express")
var users = require("users")
const app = express()


console.log(users)

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(8000, ()=> {
    console.log('server is listening to port 8000')
})

