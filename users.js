const express = require("express")
const router = express.Router()
const uuid = require('uuid')

let users = require("./userDB")



router.get('/', (req, res)=>{
    res.send('Im here')
})