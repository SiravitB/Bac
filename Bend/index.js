const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://admin:1234@cluster0.oetar3j.mongodb.net/Users")

app.post("/Login", (req,res) =>{
    const {Email, Password} = req.body;
    UserModel.findOne({Email: Email})
    .then(user => {
        if(user) {
            if(user.Password === Password) {
                res.json("เข้าสู่ระบบสำเร็จ")
            } else {
                res.json("รหัสผ่านไม่ถูกต้อง")
            }
        }else {
            res.json("ไม่มีรหัสผ่านที่บันทึกอยู่ในระบบ")
        }
    })
})

app.post('/Signup', (req,res) =>{
    UserModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(er => res.json(err))
})
app.listen(3001, () =>{
    console.log("server is running")
})