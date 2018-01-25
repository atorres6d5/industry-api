const model = require('../models/adminModel')
const bcrypt = require('bcryptjs')
const secret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')


class adminCtrl {

  static checkPass(req, res, next){
    console.log(req.body)
    const id = req.body.headers.userid
    const pass = req.body.headers.pass
    model.getUser(id).then(result=>{
      console.log(result)
      req.isAdmin = result.isAdmin
      req.userid = result.id
      bcrypt.compare(pass, result.hashPass).then(result=>{
        result ? next() : res.status(401).json({message: "wrong password"})
      })
    })



  }

  static allUsers(req, res, next){
    model.allUsers().then(result=>{
      res.status(200).send(result)
    })
  }

  static getUser(req, res, next){
    const id = req.params.id
    model.getUser(id).then(result=>{
      res.status(200).send(result)
    })
  }

  static newUser(req, res, next){
    const user = req.body.user
    model.newUser(user).then(result=>{
      res.status(200).send(result)
    })
  }


  ////////////////// verify incoming data ////////////////

  static checkNewUser(req, res, next){
    if(!name)res.status(400).send({message:'Missing a Name'})
    if(!Employee_id)res.status(400).send({message:'Missing Employee id, this will be used to log in'})
    else{
      next()
    }
  }


  static makeToken(req, res, next){
    const token = jwt.sign({id: req.userid, isAdmin:req.isAdmin}, secret, { expiresIn: '10h' })
    res.status(200).json({token})
  }

  static verifyToken(req, res, next){
    const token = req.headers.token
    //console.log(token)
    const decoded = jwt.verify(token, secret)
    console.log("this token is", decoded);
    res.status(200).json(decoded)
  }


}



module.exports = adminCtrl
