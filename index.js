var express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/', require('./users'))



app.listen(8000, ()=> {
    console.log('server is listening to port 8000')
})

