const express = require("express")
const router = express.Router()
const uuid = require('uuid')

let users = require("./userDB")



router.get('/users', (req, res)=>{
    res.json(users)
})

router.get('/user/:id', (req, res)=>{

    const found = users.filter(user => user.id === parseInt(req.params.id))
    res.send(found)

})

router.post('/user/new', (req, res)=>{

    const newUser= {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email
    }

    users.push(newUser)

    res.json("success")
   
})

router.get('/update/:id', (req, res)=>{
    const user = users.filter(user => user.id === parseInt(req.params.id))
    user[0].id = 10

    res.json("success")
})

module.exports = router