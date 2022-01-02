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

router.put('/update/:id', (req, res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id))

    if ( found ) {
        const user = users.filter(user => user.id === parseInt(req.params.id))
        update = req.body

        //user[0].id = update.id && update.id
        user[0].name = update.name ? update.name : user[0].name
        user[0].email = update.email ? update.email : user[0].email

        res.json({msg: 'user updated', user})
    }
    
    res.json({msg: 'invalid id'})
})

router.delete('/delete/:id', (req, res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id))

    if (found) {
        users = users.filter(user => user.id != parseInt(req.params.id))

        res.json({msg: 'user deleted'})
    }

    res.json({msg: 'invalid user'})
})

module.exports = router